import { IAppWriteDocument, IAppWriteLoopedData, IAppWriteResponse } from "@/api/types";
import { TGroupedItems, TLocales } from "@/functions/locale/types";



/**
 * @description Extracts translation fields from the Appwrite document response data.
 * @param {Object} responseData - The response data containing the total count and an array of documents.
 * @param {number} responseData.total - The total number of documents.
 * @param {Array<Appwrite.IAppWriteDocument>} responseData.documents - The array of Appwrite documents.
 * @returns {Array<Appwrite.IAppWriteLoopedData>} - An array of objects containing translation fields (de, en, id, it).
 */
export const loopAndRetrieveTranslations = (responseData: IAppWriteResponse) => {
    return responseData.documents.map(doc => ({
        en: doc.en,
        id: doc.id,
        it: doc.it,
    })) as IAppWriteLoopedData[];
}


/** Retrieves a single translation from a collection of 
 * @param {TGroupedItems} translations - The collection of translations to retrieve the translation from.
 * @param {string} key - The key of the translation to retrieve.
 * @param {string} fallback - The fallback value to return if the translation is not found.
 * @returns {string} The translation.
 * @example - getSingleTranslation(translations, 'MIAO-BAU-2')
 * @example - const T = getSingleTranslation(translations, "MIAO-BAUAA");
 */
export const getSingleTranslation = (translations: TGroupedItems, key: string, fallback?: string): string => {
    // Get the translation from the collection of translations
    const translation = translations[key];
    // If the translation is a string, return it
    if (typeof translation === 'string') return translation;
    // Assuming you want to return the 'en' translation if it's an object
    return translation ? translation.en : fallback ?? '---';
};



/** A function that groups items by ID
 * @param {TranslationItem[]} items - The items to group by ID 
 * @param {TLocales} localeFilter - The locale to filter by
 * @returns {TGroupedItems} - The grouped items
 */
export function groupTranslationsByLocale(items: IAppWriteDocument[], localeFilter?: TLocales): TGroupedItems {
    return items.reduce((acc, item) => {
        if (localeFilter) {
            acc[item.id] = item[localeFilter as TLocales];
        } else {
            acc[item.id] = {
                it: item.it,
                en: item.en,
            };
        }
        return acc;
    }, {} as TGroupedItems);
}