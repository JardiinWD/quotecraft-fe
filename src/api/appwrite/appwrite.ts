'use server'

import {
  IAppWriteApi,
  IAppWritePromise,
  IAppWriteResponse,
  TNavigatorLocalePromise
} from '@/api/types'
import { AppWriteDB } from '@/database'
import {
  groupTranslationsByLocale,
  loopAndRetrieveTranslations
} from '@/functions/locale'
import { TLocales } from '@/functions/locale/types'
import { parseCookies } from 'nookies'

// ----------- API LAYER
export const AppWriteApi: IAppWriteApi = {
  handleAppWriteErrors: async (
    error: unknown,
    context: string
  ): Promise<IAppWritePromise> => {
    console.error(`An error occurred in ${context} --> ${error}`)
    return {
      data: [],
      error:
        error instanceof Error ? error.message : 'An unknown error occurred',
      status: 'error'
    }
  },
  /**
   * @description Retrieves a collection from Appwrite using the provided database and collection IDs.
   * @param {string} databaseId - The ID of the Appwrite database to retrieve the collection from.
   * @param {string} collectionId - The ID of the Appwrite collection to retrieve.
   * @returns {Promise<Appwrite.IAppWritePromise>} - A promise that resolves to an object containing the collection data, error message, and status.
   * @example - const {data, error, status} = await getCollectionFromAppwriteDB('DATABASE_ID', 'COLLECTION_ID');
   */
  getCollectionFromAppwriteDB: async (
    databaseId: string,
    collectionId: string
  ): Promise<IAppWritePromise> => {
    try {
      // Check if the database and collection params exist
      if (!databaseId || !collectionId)
        throw new Error('Database and collection IDs are required')
      // Retrieve the Navigator Locale for grouping
      const { locale } = await AppWriteApi.getNavigatorLocale()
      // Get and Retrieve the collection from Appwrite
      const results = await AppWriteDB.listDocuments(databaseId, collectionId)
        .then((response) => {
          // Loop and Retrieve the Translations
          const loopedData = loopAndRetrieveTranslations(
            response as IAppWriteResponse
          )
          if (!loopedData) throw new Error('No Looped Data Can be Found!')
          // Group the AppWrite Looped Data by Locale
          const groupedData = groupTranslationsByLocale(
            loopedData,
            locale.language as TLocales
          )
          if (!groupedData) throw new Error('No Grouped Data Can be Found!')
          return groupedData
        })
        .catch((error) => {
          // Handle the error using the handleAuthenticationError method
          return AppWriteApi.handleAppWriteErrors(
            error instanceof Error
              ? error.message
              : 'An error occurred while finding the results',
            'getCollectionFromAppwriteDB'
          )
        })
      // Return the Data
      return {
        data: results,
        error: null,
        status: 'success'
      }
    } catch (error) {
      // Handle the error using the handleAuthenticationError method
      return await AppWriteApi.handleAppWriteErrors(
        error instanceof Error
          ? error.message
          : 'An error occurred whilte fetching the data',
        'getCollectionFromAppwriteDB'
      )
    }
  },
  getNavigatorLocale: async (): Promise<TNavigatorLocalePromise> => {
    try {
      // Retrieve the cookies store
      const cookieStore = parseCookies()
      // Get the Cookie Locale
      const cookieLanguageLocale = cookieStore['NAVIGATOR-LOCALE']
      // Get the Country Code
      const cookieCountryCode = cookieStore['NAVIGATOR-COUNTRY-CODE']
      // If there's no cookie locale then throw a new Error
      if (!cookieLanguageLocale && !cookieCountryCode)
        throw new Error('No Cookie Locale Found')
      // Else Return the Data
      return {
        locale: {
          language: cookieLanguageLocale ?? 'en',
          countryCode: cookieCountryCode ?? 'US'
        },
        error: null,
        status: 'success'
      }
    } catch (error) {
      // If the error is an instance of Error then return the error message and status and locale set to "en"
      if (error instanceof Error)
        return {
          locale: {
            language: 'en',
            countryCode: 'US'
          },
          error: error.message,
          status: 'error'
        }
      // If the error is not an instance of Error then return a default error message and status and locale set to "en"
      else
        return {
          locale: {
            language: 'en',
            countryCode: 'US'
          },
          error: 'Something Went Wrong',
          status: 'error'
        }
    }
  }
}
