'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The PrepaidSalesProductDTO model module.
 * @module model/PrepaidSalesProductDTO
 */
var PrepaidSalesProductDTO = function () {
    /**
     * Constructs a new <code>PrepaidSalesProductDTO</code>.
     * @alias module:model/PrepaidSalesProductDTO
     * @class
     */

    function PrepaidSalesProductDTO() {
        _classCallCheck(this, PrepaidSalesProductDTO);

        this.item = undefined;
    }

    /**
    * Constructs a <code>PrepaidSalesProductDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PrepaidSalesProductDTO} obj Optional instance to populate.
    * @return {module:model/PrepaidSalesProductDTO} The populated <code>PrepaidSalesProductDTO</code> instance.
    */


    _createClass(PrepaidSalesProductDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PrepaidSalesProductDTO();

                if (data.hasOwnProperty('item')) {
                    obj['item'] = _ApiClient2.default.convertToType(data['item'], 'String');
                }
            }
            return obj;
        }

        /**
         * prepaid sales transaction id
         * @member {String} item
         */

    }]);

    return PrepaidSalesProductDTO;
}();

exports.default = PrepaidSalesProductDTO;