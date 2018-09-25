
import ApiClient from '../ApiClient';





/**
* The PaymentContractsRequestIdResultPayingAccount model module.
* @module model/PaymentContractsRequestIdResultPayingAccount
* @version 2.0.0
*/
export default class PaymentContractsRequestIdResultPayingAccount {
    /**
    * Constructs a new <code>PaymentContractsRequestIdResultPayingAccount</code>.
    * The bank account you can use for pay in.
    * @alias module:model/PaymentContractsRequestIdResultPayingAccount
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentContractsRequestIdResultPayingAccount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentContractsRequestIdResultPayingAccount} obj Optional instance to populate.
    * @return {module:model/PaymentContractsRequestIdResultPayingAccount} The populated <code>PaymentContractsRequestIdResultPayingAccount</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentContractsRequestIdResultPayingAccount();

            
            
            

            if (data.hasOwnProperty('accountowner')) {
                obj['accountowner'] = ApiClient.convertToType(data['accountowner'], 'String');
            }
            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
            if (data.hasOwnProperty('bic')) {
                obj['bic'] = ApiClient.convertToType(data['bic'], 'String');
            }
        }
        return obj;
    }

    /**
    * The bank account owner
    * @member {String} accountowner
    */
    accountowner = undefined;
    /**
    * IBAN
    * @member {String} iban
    */
    iban = undefined;
    /**
    * BIC
    * @member {String} bic
    */
    bic = undefined;








}


