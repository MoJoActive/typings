// Type definitions for mojo
// Project: MarkertCarpenter
// Definitions by: Travis Lockcuff <tlockcuff@mojoactive.com>

declare interface String {
    /**
     * Returns a formated string
     * @example "Hello {0}".format("World"); 
     */
    format(string: string): string;
}


interface IHash {
    /**
     * Returns an object of argument to hash
     * 
     * @param comma_separated_string  
     * @example mojo.hash.get('arg1', 'arg2') -> { arg1: 'hash1', arg2: 'hash2' } 
     */
    get(comma_separated_string: string): Object
    /**
     * Returns an array of hashes
     * 
     * @example mojo.hash.get() -> ['hash1','hash2']
     */
    get(): Array<string>
    /**
     * Sets the window.location hash
     * 
     * @param comma_separated_string a comma separated list of strings 
     */
    set(comma_separated_string: string)
    /**
     * Sets the location hash with url encoding
     * 
     * @param comma_separated_string a comma separated list of strings 
     */
    encode(comma_separated_string: string)
    /**
     * Returns an array of url decoded hash params
     */
    decode(): Array<string>
}

interface ILoader {
    /**
     * Shows a loading animation over the passed in selector
     */
    show(selector: string|JQuery)
    /**
     * Hides the loading animation over the passed in selector
     */
    hide(selector: string|JQuery)
}

declare namespace mojo {

    /**
     * A set of global variables, intended to be updated but never deleted. windowDimensions and currentBreakpoint are automatically calculated in mojo.init and mojo.resize
     */
    const globals: {
        windowDimensions: {
            width: number,
            height: number
        },
        currentBreakpoint: string
    }

    /**
     * A set of constants, these should never change or be deleted.
     */
    const constants: {
        breakpoints: {
            xs: { name: 'xs', min: 0, max: 767 },
            sm: { name: 'sm', min: 768, max: 991 },
            md: { name: 'md', min: 992, max: 1199 },
            lg: { name: 'lg', min: 1200, max: 9999 }
        }
    }

    /**
     * Returns a formated string with any non numeric characters removed along with any double dashes removed.
     */
    function getFriendlyUrl(string: string): string

    /**
     * A dictionary of all the queryString values on the current page. This is a Case Sensitive
     */
    function queryString(): Object

    /**
     * Utility methods for the hash and loader
     * See the above interfaces for more information 
     */
    const hash:IHash;
    const loader:ILoader;

    /**
     * Utility method for creating options for an HTML select element
     * 
     * @param selector selector for the HTML <select> 
     * @param data an array of data
     * @param val select <option> val
     * @param test select <option> text
     * @param placeholder select <option> placeholder (default to: Please Select...)
     * @example ($('.selector'), [{Id: 1, Name: "Test"}, {Id: 2, Name: "Test 2"}], 'Id', 'Name')
     */
    function createSelectOptions(selector: string, data: Array<any>, val: string, text: string, placeholder: string)

    /**
     * Fires on the document ready event.
     * 
     * @param dependencies an array of dependencies
     * @param fn function to run on document ready
     */
    function ready(dependencies: Array<string>, fn: Function)
    function ready(fn: Function)

    /**
     * Fires on the document load event.
     * 
     * @param dependencies an array of dependencies
     * @param fn function to run on document load
     */
    function load(dependencies: Array<string>, fn: Function)
    function load(fn: Function)

    /**
     * Fires on the document resize event.
     * 
     * @param dependencies an array of dependencies
     * @param fn function to run on document resize
     */
    function resize(dependencies: Array<string>, fn: Function)
    function resize(fn: Function)

    /**
     * Uses Axois to handle ajax requests.
     * 
     * @see {@link https://github.com/mzabriskie/axios}
     */
    function ajax<T>(config: Axios.AxiosXHRConfig<T>): Axios.IPromise<Axios.AxiosXHR<T>>;
}
