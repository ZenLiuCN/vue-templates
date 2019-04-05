/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const com = $root.com = (() => {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    const com = {};

    com.xingqiao = (function() {

        /**
         * Namespace xingqiao.
         * @memberof com
         * @namespace
         */
        const xingqiao = {};

        xingqiao.demo = (function() {

            /**
             * Namespace demo.
             * @memberof com.xingqiao
             * @namespace
             */
            const demo = {};

            demo.eprescriber = (function() {

                /**
                 * Namespace eprescriber.
                 * @memberof com.xingqiao.demo
                 * @namespace
                 */
                const eprescriber = {};

                eprescriber.Prescription = (function() {

                    /**
                     * Properties of a Prescription.
                     * @memberof com.xingqiao.demo.eprescriber
                     * @interface IPrescription
                     * @property {string|null} [id] Prescription id
                     * @property {string|null} [name] Prescription name
                     * @property {string|null} [identifier] Prescription identifier
                     * @property {com.xingqiao.demo.eprescriber.Prescription.Gender|null} [gender] Prescription gender
                     * @property {string|null} [age] Prescription age
                     * @property {string|null} [phone] Prescription phone
                     * @property {string|null} [hisId] Prescription hisId
                     * @property {string|null} [weight] Prescription weight
                     * @property {string|null} [height] Prescription height
                     * @property {string|null} [drugAllergies] Prescription drugAllergies
                     * @property {Array.<string>|null} [conditions] Prescription conditions
                     * @property {string|null} [diagnosis] Prescription diagnosis
                     * @property {Array.<com.xingqiao.demo.eprescriber.Prescription.IFormulation>|null} [pharmaceuticalFormulation] Prescription pharmaceuticalFormulation
                     * @property {string|null} [useDirections] Prescription useDirections
                     * @property {number|Long|null} [issueDate] Prescription issueDate
                     * @property {number|Long|null} [expiryDate] Prescription expiryDate
                     * @property {string|null} [prescriber] Prescription prescriber
                     * @property {string|null} [institution] Prescription institution
                     * @property {string|null} [department] Prescription department
                     * @property {string|null} [pharmacist] Prescription pharmacist
                     * @property {string|null} [pharmacistInstitution] Prescription pharmacistInstitution
                     * @property {string|null} [dispenser] Prescription dispenser
                     * @property {string|null} [dispenserInstitution] Prescription dispenserInstitution
                     * @property {com.xingqiao.demo.eprescriber.Prescription.ISignature|null} [signature] Prescription signature
                     */

                    /**
                     * Constructs a new Prescription.
                     * @memberof com.xingqiao.demo.eprescriber
                     * @classdesc Represents a Prescription.
                     * @implements IPrescription
                     * @constructor
                     * @param {com.xingqiao.demo.eprescriber.IPrescription=} [properties] Properties to set
                     */
                    function Prescription(properties) {
                        this.conditions = [];
                        this.pharmaceuticalFormulation = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Prescription id.
                     * @member {string} id
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.id = "";

                    /**
                     * Prescription name.
                     * @member {string} name
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.name = "";

                    /**
                     * Prescription identifier.
                     * @member {string} identifier
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.identifier = "";

                    /**
                     * Prescription gender.
                     * @member {com.xingqiao.demo.eprescriber.Prescription.Gender} gender
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.gender = 0;

                    /**
                     * Prescription age.
                     * @member {string} age
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.age = "";

                    /**
                     * Prescription phone.
                     * @member {string} phone
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.phone = "";

                    /**
                     * Prescription hisId.
                     * @member {string} hisId
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.hisId = "";

                    /**
                     * Prescription weight.
                     * @member {string} weight
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.weight = "";

                    /**
                     * Prescription height.
                     * @member {string} height
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.height = "";

                    /**
                     * Prescription drugAllergies.
                     * @member {string} drugAllergies
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.drugAllergies = "";

                    /**
                     * Prescription conditions.
                     * @member {Array.<string>} conditions
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.conditions = $util.emptyArray;

                    /**
                     * Prescription diagnosis.
                     * @member {string} diagnosis
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.diagnosis = "";

                    /**
                     * Prescription pharmaceuticalFormulation.
                     * @member {Array.<com.xingqiao.demo.eprescriber.Prescription.IFormulation>} pharmaceuticalFormulation
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.pharmaceuticalFormulation = $util.emptyArray;

                    /**
                     * Prescription useDirections.
                     * @member {string} useDirections
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.useDirections = "";

                    /**
                     * Prescription issueDate.
                     * @member {number|Long} issueDate
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.issueDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Prescription expiryDate.
                     * @member {number|Long} expiryDate
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.expiryDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Prescription prescriber.
                     * @member {string} prescriber
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.prescriber = "";

                    /**
                     * Prescription institution.
                     * @member {string} institution
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.institution = "";

                    /**
                     * Prescription department.
                     * @member {string} department
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.department = "";

                    /**
                     * Prescription pharmacist.
                     * @member {string} pharmacist
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.pharmacist = "";

                    /**
                     * Prescription pharmacistInstitution.
                     * @member {string} pharmacistInstitution
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.pharmacistInstitution = "";

                    /**
                     * Prescription dispenser.
                     * @member {string} dispenser
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.dispenser = "";

                    /**
                     * Prescription dispenserInstitution.
                     * @member {string} dispenserInstitution
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.dispenserInstitution = "";

                    /**
                     * Prescription signature.
                     * @member {com.xingqiao.demo.eprescriber.Prescription.ISignature|null|undefined} signature
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     */
                    Prescription.prototype.signature = null;

                    /**
                     * Creates a new Prescription instance using the specified properties.
                     * @function create
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @static
                     * @param {com.xingqiao.demo.eprescriber.IPrescription=} [properties] Properties to set
                     * @returns {com.xingqiao.demo.eprescriber.Prescription} Prescription instance
                     */
                    Prescription.create = function create(properties) {
                        return new Prescription(properties);
                    };

                    /**
                     * Encodes the specified Prescription message. Does not implicitly {@link com.xingqiao.demo.eprescriber.Prescription.verify|verify} messages.
                     * @function encode
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @static
                     * @param {com.xingqiao.demo.eprescriber.IPrescription} message Prescription message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Prescription.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.name != null && message.hasOwnProperty("name"))
                            writer.uint32(/* id 11, wireType 2 =*/90).string(message.name);
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            writer.uint32(/* id 12, wireType 2 =*/98).string(message.identifier);
                        if (message.gender != null && message.hasOwnProperty("gender"))
                            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.gender);
                        if (message.age != null && message.hasOwnProperty("age"))
                            writer.uint32(/* id 14, wireType 2 =*/114).string(message.age);
                        if (message.phone != null && message.hasOwnProperty("phone"))
                            writer.uint32(/* id 15, wireType 2 =*/122).string(message.phone);
                        if (message.hisId != null && message.hasOwnProperty("hisId"))
                            writer.uint32(/* id 21, wireType 2 =*/170).string(message.hisId);
                        if (message.weight != null && message.hasOwnProperty("weight"))
                            writer.uint32(/* id 22, wireType 2 =*/178).string(message.weight);
                        if (message.height != null && message.hasOwnProperty("height"))
                            writer.uint32(/* id 23, wireType 2 =*/186).string(message.height);
                        if (message.drugAllergies != null && message.hasOwnProperty("drugAllergies"))
                            writer.uint32(/* id 24, wireType 2 =*/194).string(message.drugAllergies);
                        if (message.conditions != null && message.conditions.length)
                            for (let i = 0; i < message.conditions.length; ++i)
                                writer.uint32(/* id 25, wireType 2 =*/202).string(message.conditions[i]);
                        if (message.diagnosis != null && message.hasOwnProperty("diagnosis"))
                            writer.uint32(/* id 26, wireType 2 =*/210).string(message.diagnosis);
                        if (message.pharmaceuticalFormulation != null && message.pharmaceuticalFormulation.length)
                            for (let i = 0; i < message.pharmaceuticalFormulation.length; ++i)
                                $root.com.xingqiao.demo.eprescriber.Prescription.Formulation.encode(message.pharmaceuticalFormulation[i], writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
                        if (message.useDirections != null && message.hasOwnProperty("useDirections"))
                            writer.uint32(/* id 31, wireType 2 =*/250).string(message.useDirections);
                        if (message.issueDate != null && message.hasOwnProperty("issueDate"))
                            writer.uint32(/* id 32, wireType 0 =*/256).int64(message.issueDate);
                        if (message.expiryDate != null && message.hasOwnProperty("expiryDate"))
                            writer.uint32(/* id 33, wireType 0 =*/264).int64(message.expiryDate);
                        if (message.prescriber != null && message.hasOwnProperty("prescriber"))
                            writer.uint32(/* id 34, wireType 2 =*/274).string(message.prescriber);
                        if (message.institution != null && message.hasOwnProperty("institution"))
                            writer.uint32(/* id 35, wireType 2 =*/282).string(message.institution);
                        if (message.department != null && message.hasOwnProperty("department"))
                            writer.uint32(/* id 36, wireType 2 =*/290).string(message.department);
                        if (message.pharmacist != null && message.hasOwnProperty("pharmacist"))
                            writer.uint32(/* id 40, wireType 2 =*/322).string(message.pharmacist);
                        if (message.pharmacistInstitution != null && message.hasOwnProperty("pharmacistInstitution"))
                            writer.uint32(/* id 41, wireType 2 =*/330).string(message.pharmacistInstitution);
                        if (message.dispenser != null && message.hasOwnProperty("dispenser"))
                            writer.uint32(/* id 51, wireType 2 =*/410).string(message.dispenser);
                        if (message.dispenserInstitution != null && message.hasOwnProperty("dispenserInstitution"))
                            writer.uint32(/* id 52, wireType 2 =*/418).string(message.dispenserInstitution);
                        if (message.signature != null && message.hasOwnProperty("signature"))
                            $root.com.xingqiao.demo.eprescriber.Prescription.Signature.encode(message.signature, writer.uint32(/* id 60, wireType 2 =*/482).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Prescription message, length delimited. Does not implicitly {@link com.xingqiao.demo.eprescriber.Prescription.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @static
                     * @param {com.xingqiao.demo.eprescriber.IPrescription} message Prescription message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Prescription.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Prescription message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.xingqiao.demo.eprescriber.Prescription} Prescription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Prescription.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.xingqiao.demo.eprescriber.Prescription();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 11:
                                message.name = reader.string();
                                break;
                            case 12:
                                message.identifier = reader.string();
                                break;
                            case 13:
                                message.gender = reader.int32();
                                break;
                            case 14:
                                message.age = reader.string();
                                break;
                            case 15:
                                message.phone = reader.string();
                                break;
                            case 21:
                                message.hisId = reader.string();
                                break;
                            case 22:
                                message.weight = reader.string();
                                break;
                            case 23:
                                message.height = reader.string();
                                break;
                            case 24:
                                message.drugAllergies = reader.string();
                                break;
                            case 25:
                                if (!(message.conditions && message.conditions.length))
                                    message.conditions = [];
                                message.conditions.push(reader.string());
                                break;
                            case 26:
                                message.diagnosis = reader.string();
                                break;
                            case 30:
                                if (!(message.pharmaceuticalFormulation && message.pharmaceuticalFormulation.length))
                                    message.pharmaceuticalFormulation = [];
                                message.pharmaceuticalFormulation.push($root.com.xingqiao.demo.eprescriber.Prescription.Formulation.decode(reader, reader.uint32()));
                                break;
                            case 31:
                                message.useDirections = reader.string();
                                break;
                            case 32:
                                message.issueDate = reader.int64();
                                break;
                            case 33:
                                message.expiryDate = reader.int64();
                                break;
                            case 34:
                                message.prescriber = reader.string();
                                break;
                            case 35:
                                message.institution = reader.string();
                                break;
                            case 36:
                                message.department = reader.string();
                                break;
                            case 40:
                                message.pharmacist = reader.string();
                                break;
                            case 41:
                                message.pharmacistInstitution = reader.string();
                                break;
                            case 51:
                                message.dispenser = reader.string();
                                break;
                            case 52:
                                message.dispenserInstitution = reader.string();
                                break;
                            case 60:
                                message.signature = $root.com.xingqiao.demo.eprescriber.Prescription.Signature.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Prescription message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.xingqiao.demo.eprescriber.Prescription} Prescription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Prescription.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Prescription message.
                     * @function verify
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Prescription.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            if (!$util.isString(message.identifier))
                                return "identifier: string expected";
                        if (message.gender != null && message.hasOwnProperty("gender"))
                            switch (message.gender) {
                            default:
                                return "gender: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.age != null && message.hasOwnProperty("age"))
                            if (!$util.isString(message.age))
                                return "age: string expected";
                        if (message.phone != null && message.hasOwnProperty("phone"))
                            if (!$util.isString(message.phone))
                                return "phone: string expected";
                        if (message.hisId != null && message.hasOwnProperty("hisId"))
                            if (!$util.isString(message.hisId))
                                return "hisId: string expected";
                        if (message.weight != null && message.hasOwnProperty("weight"))
                            if (!$util.isString(message.weight))
                                return "weight: string expected";
                        if (message.height != null && message.hasOwnProperty("height"))
                            if (!$util.isString(message.height))
                                return "height: string expected";
                        if (message.drugAllergies != null && message.hasOwnProperty("drugAllergies"))
                            if (!$util.isString(message.drugAllergies))
                                return "drugAllergies: string expected";
                        if (message.conditions != null && message.hasOwnProperty("conditions")) {
                            if (!Array.isArray(message.conditions))
                                return "conditions: array expected";
                            for (let i = 0; i < message.conditions.length; ++i)
                                if (!$util.isString(message.conditions[i]))
                                    return "conditions: string[] expected";
                        }
                        if (message.diagnosis != null && message.hasOwnProperty("diagnosis"))
                            if (!$util.isString(message.diagnosis))
                                return "diagnosis: string expected";
                        if (message.pharmaceuticalFormulation != null && message.hasOwnProperty("pharmaceuticalFormulation")) {
                            if (!Array.isArray(message.pharmaceuticalFormulation))
                                return "pharmaceuticalFormulation: array expected";
                            for (let i = 0; i < message.pharmaceuticalFormulation.length; ++i) {
                                let error = $root.com.xingqiao.demo.eprescriber.Prescription.Formulation.verify(message.pharmaceuticalFormulation[i]);
                                if (error)
                                    return "pharmaceuticalFormulation." + error;
                            }
                        }
                        if (message.useDirections != null && message.hasOwnProperty("useDirections"))
                            if (!$util.isString(message.useDirections))
                                return "useDirections: string expected";
                        if (message.issueDate != null && message.hasOwnProperty("issueDate"))
                            if (!$util.isInteger(message.issueDate) && !(message.issueDate && $util.isInteger(message.issueDate.low) && $util.isInteger(message.issueDate.high)))
                                return "issueDate: integer|Long expected";
                        if (message.expiryDate != null && message.hasOwnProperty("expiryDate"))
                            if (!$util.isInteger(message.expiryDate) && !(message.expiryDate && $util.isInteger(message.expiryDate.low) && $util.isInteger(message.expiryDate.high)))
                                return "expiryDate: integer|Long expected";
                        if (message.prescriber != null && message.hasOwnProperty("prescriber"))
                            if (!$util.isString(message.prescriber))
                                return "prescriber: string expected";
                        if (message.institution != null && message.hasOwnProperty("institution"))
                            if (!$util.isString(message.institution))
                                return "institution: string expected";
                        if (message.department != null && message.hasOwnProperty("department"))
                            if (!$util.isString(message.department))
                                return "department: string expected";
                        if (message.pharmacist != null && message.hasOwnProperty("pharmacist"))
                            if (!$util.isString(message.pharmacist))
                                return "pharmacist: string expected";
                        if (message.pharmacistInstitution != null && message.hasOwnProperty("pharmacistInstitution"))
                            if (!$util.isString(message.pharmacistInstitution))
                                return "pharmacistInstitution: string expected";
                        if (message.dispenser != null && message.hasOwnProperty("dispenser"))
                            if (!$util.isString(message.dispenser))
                                return "dispenser: string expected";
                        if (message.dispenserInstitution != null && message.hasOwnProperty("dispenserInstitution"))
                            if (!$util.isString(message.dispenserInstitution))
                                return "dispenserInstitution: string expected";
                        if (message.signature != null && message.hasOwnProperty("signature")) {
                            let error = $root.com.xingqiao.demo.eprescriber.Prescription.Signature.verify(message.signature);
                            if (error)
                                return "signature." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Prescription message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.xingqiao.demo.eprescriber.Prescription} Prescription
                     */
                    Prescription.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.xingqiao.demo.eprescriber.Prescription)
                            return object;
                        let message = new $root.com.xingqiao.demo.eprescriber.Prescription();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.identifier != null)
                            message.identifier = String(object.identifier);
                        switch (object.gender) {
                        case "UNKNOWN":
                        case 0:
                            message.gender = 0;
                            break;
                        case "MALE":
                        case 1:
                            message.gender = 1;
                            break;
                        case "FEMALE":
                        case 2:
                            message.gender = 2;
                            break;
                        }
                        if (object.age != null)
                            message.age = String(object.age);
                        if (object.phone != null)
                            message.phone = String(object.phone);
                        if (object.hisId != null)
                            message.hisId = String(object.hisId);
                        if (object.weight != null)
                            message.weight = String(object.weight);
                        if (object.height != null)
                            message.height = String(object.height);
                        if (object.drugAllergies != null)
                            message.drugAllergies = String(object.drugAllergies);
                        if (object.conditions) {
                            if (!Array.isArray(object.conditions))
                                throw TypeError(".com.xingqiao.demo.eprescriber.Prescription.conditions: array expected");
                            message.conditions = [];
                            for (let i = 0; i < object.conditions.length; ++i)
                                message.conditions[i] = String(object.conditions[i]);
                        }
                        if (object.diagnosis != null)
                            message.diagnosis = String(object.diagnosis);
                        if (object.pharmaceuticalFormulation) {
                            if (!Array.isArray(object.pharmaceuticalFormulation))
                                throw TypeError(".com.xingqiao.demo.eprescriber.Prescription.pharmaceuticalFormulation: array expected");
                            message.pharmaceuticalFormulation = [];
                            for (let i = 0; i < object.pharmaceuticalFormulation.length; ++i) {
                                if (typeof object.pharmaceuticalFormulation[i] !== "object")
                                    throw TypeError(".com.xingqiao.demo.eprescriber.Prescription.pharmaceuticalFormulation: object expected");
                                message.pharmaceuticalFormulation[i] = $root.com.xingqiao.demo.eprescriber.Prescription.Formulation.fromObject(object.pharmaceuticalFormulation[i]);
                            }
                        }
                        if (object.useDirections != null)
                            message.useDirections = String(object.useDirections);
                        if (object.issueDate != null)
                            if ($util.Long)
                                (message.issueDate = $util.Long.fromValue(object.issueDate)).unsigned = false;
                            else if (typeof object.issueDate === "string")
                                message.issueDate = parseInt(object.issueDate, 10);
                            else if (typeof object.issueDate === "number")
                                message.issueDate = object.issueDate;
                            else if (typeof object.issueDate === "object")
                                message.issueDate = new $util.LongBits(object.issueDate.low >>> 0, object.issueDate.high >>> 0).toNumber();
                        if (object.expiryDate != null)
                            if ($util.Long)
                                (message.expiryDate = $util.Long.fromValue(object.expiryDate)).unsigned = false;
                            else if (typeof object.expiryDate === "string")
                                message.expiryDate = parseInt(object.expiryDate, 10);
                            else if (typeof object.expiryDate === "number")
                                message.expiryDate = object.expiryDate;
                            else if (typeof object.expiryDate === "object")
                                message.expiryDate = new $util.LongBits(object.expiryDate.low >>> 0, object.expiryDate.high >>> 0).toNumber();
                        if (object.prescriber != null)
                            message.prescriber = String(object.prescriber);
                        if (object.institution != null)
                            message.institution = String(object.institution);
                        if (object.department != null)
                            message.department = String(object.department);
                        if (object.pharmacist != null)
                            message.pharmacist = String(object.pharmacist);
                        if (object.pharmacistInstitution != null)
                            message.pharmacistInstitution = String(object.pharmacistInstitution);
                        if (object.dispenser != null)
                            message.dispenser = String(object.dispenser);
                        if (object.dispenserInstitution != null)
                            message.dispenserInstitution = String(object.dispenserInstitution);
                        if (object.signature != null) {
                            if (typeof object.signature !== "object")
                                throw TypeError(".com.xingqiao.demo.eprescriber.Prescription.signature: object expected");
                            message.signature = $root.com.xingqiao.demo.eprescriber.Prescription.Signature.fromObject(object.signature);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Prescription message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @static
                     * @param {com.xingqiao.demo.eprescriber.Prescription} message Prescription
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Prescription.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults) {
                            object.conditions = [];
                            object.pharmaceuticalFormulation = [];
                        }
                        if (options.defaults) {
                            object.id = "";
                            object.name = "";
                            object.identifier = "";
                            object.gender = options.enums === String ? "UNKNOWN" : 0;
                            object.age = "";
                            object.phone = "";
                            object.hisId = "";
                            object.weight = "";
                            object.height = "";
                            object.drugAllergies = "";
                            object.diagnosis = "";
                            object.useDirections = "";
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, false);
                                object.issueDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.issueDate = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                let long = new $util.Long(0, 0, false);
                                object.expiryDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.expiryDate = options.longs === String ? "0" : 0;
                            object.prescriber = "";
                            object.institution = "";
                            object.department = "";
                            object.pharmacist = "";
                            object.pharmacistInstitution = "";
                            object.dispenser = "";
                            object.dispenserInstitution = "";
                            object.signature = null;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.identifier != null && message.hasOwnProperty("identifier"))
                            object.identifier = message.identifier;
                        if (message.gender != null && message.hasOwnProperty("gender"))
                            object.gender = options.enums === String ? $root.com.xingqiao.demo.eprescriber.Prescription.Gender[message.gender] : message.gender;
                        if (message.age != null && message.hasOwnProperty("age"))
                            object.age = message.age;
                        if (message.phone != null && message.hasOwnProperty("phone"))
                            object.phone = message.phone;
                        if (message.hisId != null && message.hasOwnProperty("hisId"))
                            object.hisId = message.hisId;
                        if (message.weight != null && message.hasOwnProperty("weight"))
                            object.weight = message.weight;
                        if (message.height != null && message.hasOwnProperty("height"))
                            object.height = message.height;
                        if (message.drugAllergies != null && message.hasOwnProperty("drugAllergies"))
                            object.drugAllergies = message.drugAllergies;
                        if (message.conditions && message.conditions.length) {
                            object.conditions = [];
                            for (let j = 0; j < message.conditions.length; ++j)
                                object.conditions[j] = message.conditions[j];
                        }
                        if (message.diagnosis != null && message.hasOwnProperty("diagnosis"))
                            object.diagnosis = message.diagnosis;
                        if (message.pharmaceuticalFormulation && message.pharmaceuticalFormulation.length) {
                            object.pharmaceuticalFormulation = [];
                            for (let j = 0; j < message.pharmaceuticalFormulation.length; ++j)
                                object.pharmaceuticalFormulation[j] = $root.com.xingqiao.demo.eprescriber.Prescription.Formulation.toObject(message.pharmaceuticalFormulation[j], options);
                        }
                        if (message.useDirections != null && message.hasOwnProperty("useDirections"))
                            object.useDirections = message.useDirections;
                        if (message.issueDate != null && message.hasOwnProperty("issueDate"))
                            if (typeof message.issueDate === "number")
                                object.issueDate = options.longs === String ? String(message.issueDate) : message.issueDate;
                            else
                                object.issueDate = options.longs === String ? $util.Long.prototype.toString.call(message.issueDate) : options.longs === Number ? new $util.LongBits(message.issueDate.low >>> 0, message.issueDate.high >>> 0).toNumber() : message.issueDate;
                        if (message.expiryDate != null && message.hasOwnProperty("expiryDate"))
                            if (typeof message.expiryDate === "number")
                                object.expiryDate = options.longs === String ? String(message.expiryDate) : message.expiryDate;
                            else
                                object.expiryDate = options.longs === String ? $util.Long.prototype.toString.call(message.expiryDate) : options.longs === Number ? new $util.LongBits(message.expiryDate.low >>> 0, message.expiryDate.high >>> 0).toNumber() : message.expiryDate;
                        if (message.prescriber != null && message.hasOwnProperty("prescriber"))
                            object.prescriber = message.prescriber;
                        if (message.institution != null && message.hasOwnProperty("institution"))
                            object.institution = message.institution;
                        if (message.department != null && message.hasOwnProperty("department"))
                            object.department = message.department;
                        if (message.pharmacist != null && message.hasOwnProperty("pharmacist"))
                            object.pharmacist = message.pharmacist;
                        if (message.pharmacistInstitution != null && message.hasOwnProperty("pharmacistInstitution"))
                            object.pharmacistInstitution = message.pharmacistInstitution;
                        if (message.dispenser != null && message.hasOwnProperty("dispenser"))
                            object.dispenser = message.dispenser;
                        if (message.dispenserInstitution != null && message.hasOwnProperty("dispenserInstitution"))
                            object.dispenserInstitution = message.dispenserInstitution;
                        if (message.signature != null && message.hasOwnProperty("signature"))
                            object.signature = $root.com.xingqiao.demo.eprescriber.Prescription.Signature.toObject(message.signature, options);
                        return object;
                    };

                    /**
                     * Converts this Prescription to JSON.
                     * @function toJSON
                     * @memberof com.xingqiao.demo.eprescriber.Prescription
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Prescription.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gender enum.
                     * @name com.xingqiao.demo.eprescriber.Prescription.Gender
                     * @enum {string}
                     * @property {number} UNKNOWN=0 UNKNOWN value
                     * @property {number} MALE=1 MALE value
                     * @property {number} FEMALE=2 FEMALE value
                     */
                    Prescription.Gender = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "UNKNOWN"] = 0;
                        values[valuesById[1] = "MALE"] = 1;
                        values[valuesById[2] = "FEMALE"] = 2;
                        return values;
                    })();

                    Prescription.Formulation = (function() {

                        /**
                         * Properties of a Formulation.
                         * @memberof com.xingqiao.demo.eprescriber.Prescription
                         * @interface IFormulation
                         * @property {string|null} [identifier] Formulation identifier
                         * @property {string|null} [name] Formulation name
                         * @property {string|null} [forms] Formulation forms
                         * @property {number|null} [dose] Formulation dose
                         * @property {string|null} [doseUnit] Formulation doseUnit
                         * @property {string|null} [useage] Formulation useage
                         * @property {string|null} [strength] Formulation strength
                         * @property {string|null} [productName] Formulation productName
                         * @property {string|null} [manufacturer] Formulation manufacturer
                         * @property {string|null} [form] Formulation form
                         * @property {string|null} [unit] Formulation unit
                         * @property {string|null} [permitCode] Formulation permitCode
                         * @property {Array.<string>|null} [supervisionCode] Formulation supervisionCode
                         * @property {number|null} [amount] Formulation amount
                         */

                        /**
                         * Constructs a new Formulation.
                         * @memberof com.xingqiao.demo.eprescriber.Prescription
                         * @classdesc Represents a Formulation.
                         * @implements IFormulation
                         * @constructor
                         * @param {com.xingqiao.demo.eprescriber.Prescription.IFormulation=} [properties] Properties to set
                         */
                        function Formulation(properties) {
                            this.supervisionCode = [];
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Formulation identifier.
                         * @member {string} identifier
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @instance
                         */
                        Formulation.prototype.identifier = "";

                        /**
                         * Formulation name.
                         * @member {string} name
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @instance
                         */
                        Formulation.prototype.name = "";

                        /**
                         * Formulation forms.
                         * @member {string} forms
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @instance
                         */
                        Formulation.prototype.forms = "";

                        /**
                         * Formulation dose.
                         * @member {number} dose
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @instance
                         */
                        Formulation.prototype.dose = 0;

                        /**
                         * Formulation doseUnit.
                         * @member {string} doseUnit
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @instance
                         */
                        Formulation.prototype.doseUnit = "";

                        /**
                         * Formulation useage.
                         * @member {string} useage
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @instance
                         */
                        Formulation.prototype.useage = "";

                        /**
                         * Formulation strength.
                         * @member {string} strength
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @instance
                         */
                        Formulation.prototype.strength = "";

                        /**
                         * Formulation productName.
                         * @member {string} productName
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @instance
                         */
                        Formulation.prototype.productName = "";

                        /**
                         * Formulation manufacturer.
                         * @member {string} manufacturer
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @instance
                         */
                        Formulation.prototype.manufacturer = "";

                        /**
                         * Formulation form.
                         * @member {string} form
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @instance
                         */
                        Formulation.prototype.form = "";

                        /**
                         * Formulation unit.
                         * @member {string} unit
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @instance
                         */
                        Formulation.prototype.unit = "";

                        /**
                         * Formulation permitCode.
                         * @member {string} permitCode
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @instance
                         */
                        Formulation.prototype.permitCode = "";

                        /**
                         * Formulation supervisionCode.
                         * @member {Array.<string>} supervisionCode
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @instance
                         */
                        Formulation.prototype.supervisionCode = $util.emptyArray;

                        /**
                         * Formulation amount.
                         * @member {number} amount
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @instance
                         */
                        Formulation.prototype.amount = 0;

                        /**
                         * Creates a new Formulation instance using the specified properties.
                         * @function create
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @static
                         * @param {com.xingqiao.demo.eprescriber.Prescription.IFormulation=} [properties] Properties to set
                         * @returns {com.xingqiao.demo.eprescriber.Prescription.Formulation} Formulation instance
                         */
                        Formulation.create = function create(properties) {
                            return new Formulation(properties);
                        };

                        /**
                         * Encodes the specified Formulation message. Does not implicitly {@link com.xingqiao.demo.eprescriber.Prescription.Formulation.verify|verify} messages.
                         * @function encode
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @static
                         * @param {com.xingqiao.demo.eprescriber.Prescription.IFormulation} message Formulation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Formulation.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.identifier != null && message.hasOwnProperty("identifier"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.identifier);
                            if (message.name != null && message.hasOwnProperty("name"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                            if (message.forms != null && message.hasOwnProperty("forms"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.forms);
                            if (message.dose != null && message.hasOwnProperty("dose"))
                                writer.uint32(/* id 4, wireType 5 =*/37).float(message.dose);
                            if (message.doseUnit != null && message.hasOwnProperty("doseUnit"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.doseUnit);
                            if (message.useage != null && message.hasOwnProperty("useage"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.useage);
                            if (message.strength != null && message.hasOwnProperty("strength"))
                                writer.uint32(/* id 7, wireType 2 =*/58).string(message.strength);
                            if (message.productName != null && message.hasOwnProperty("productName"))
                                writer.uint32(/* id 8, wireType 2 =*/66).string(message.productName);
                            if (message.manufacturer != null && message.hasOwnProperty("manufacturer"))
                                writer.uint32(/* id 9, wireType 2 =*/74).string(message.manufacturer);
                            if (message.form != null && message.hasOwnProperty("form"))
                                writer.uint32(/* id 10, wireType 2 =*/82).string(message.form);
                            if (message.unit != null && message.hasOwnProperty("unit"))
                                writer.uint32(/* id 11, wireType 2 =*/90).string(message.unit);
                            if (message.permitCode != null && message.hasOwnProperty("permitCode"))
                                writer.uint32(/* id 12, wireType 2 =*/98).string(message.permitCode);
                            if (message.supervisionCode != null && message.supervisionCode.length)
                                for (let i = 0; i < message.supervisionCode.length; ++i)
                                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.supervisionCode[i]);
                            if (message.amount != null && message.hasOwnProperty("amount"))
                                writer.uint32(/* id 14, wireType 5 =*/117).float(message.amount);
                            return writer;
                        };

                        /**
                         * Encodes the specified Formulation message, length delimited. Does not implicitly {@link com.xingqiao.demo.eprescriber.Prescription.Formulation.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @static
                         * @param {com.xingqiao.demo.eprescriber.Prescription.IFormulation} message Formulation message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Formulation.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Formulation message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.xingqiao.demo.eprescriber.Prescription.Formulation} Formulation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Formulation.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.xingqiao.demo.eprescriber.Prescription.Formulation();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.identifier = reader.string();
                                    break;
                                case 2:
                                    message.name = reader.string();
                                    break;
                                case 3:
                                    message.forms = reader.string();
                                    break;
                                case 4:
                                    message.dose = reader.float();
                                    break;
                                case 5:
                                    message.doseUnit = reader.string();
                                    break;
                                case 6:
                                    message.useage = reader.string();
                                    break;
                                case 7:
                                    message.strength = reader.string();
                                    break;
                                case 8:
                                    message.productName = reader.string();
                                    break;
                                case 9:
                                    message.manufacturer = reader.string();
                                    break;
                                case 10:
                                    message.form = reader.string();
                                    break;
                                case 11:
                                    message.unit = reader.string();
                                    break;
                                case 12:
                                    message.permitCode = reader.string();
                                    break;
                                case 13:
                                    if (!(message.supervisionCode && message.supervisionCode.length))
                                        message.supervisionCode = [];
                                    message.supervisionCode.push(reader.string());
                                    break;
                                case 14:
                                    message.amount = reader.float();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Formulation message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.xingqiao.demo.eprescriber.Prescription.Formulation} Formulation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Formulation.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Formulation message.
                         * @function verify
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Formulation.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.identifier != null && message.hasOwnProperty("identifier"))
                                if (!$util.isString(message.identifier))
                                    return "identifier: string expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.forms != null && message.hasOwnProperty("forms"))
                                if (!$util.isString(message.forms))
                                    return "forms: string expected";
                            if (message.dose != null && message.hasOwnProperty("dose"))
                                if (typeof message.dose !== "number")
                                    return "dose: number expected";
                            if (message.doseUnit != null && message.hasOwnProperty("doseUnit"))
                                if (!$util.isString(message.doseUnit))
                                    return "doseUnit: string expected";
                            if (message.useage != null && message.hasOwnProperty("useage"))
                                if (!$util.isString(message.useage))
                                    return "useage: string expected";
                            if (message.strength != null && message.hasOwnProperty("strength"))
                                if (!$util.isString(message.strength))
                                    return "strength: string expected";
                            if (message.productName != null && message.hasOwnProperty("productName"))
                                if (!$util.isString(message.productName))
                                    return "productName: string expected";
                            if (message.manufacturer != null && message.hasOwnProperty("manufacturer"))
                                if (!$util.isString(message.manufacturer))
                                    return "manufacturer: string expected";
                            if (message.form != null && message.hasOwnProperty("form"))
                                if (!$util.isString(message.form))
                                    return "form: string expected";
                            if (message.unit != null && message.hasOwnProperty("unit"))
                                if (!$util.isString(message.unit))
                                    return "unit: string expected";
                            if (message.permitCode != null && message.hasOwnProperty("permitCode"))
                                if (!$util.isString(message.permitCode))
                                    return "permitCode: string expected";
                            if (message.supervisionCode != null && message.hasOwnProperty("supervisionCode")) {
                                if (!Array.isArray(message.supervisionCode))
                                    return "supervisionCode: array expected";
                                for (let i = 0; i < message.supervisionCode.length; ++i)
                                    if (!$util.isString(message.supervisionCode[i]))
                                        return "supervisionCode: string[] expected";
                            }
                            if (message.amount != null && message.hasOwnProperty("amount"))
                                if (typeof message.amount !== "number")
                                    return "amount: number expected";
                            return null;
                        };

                        /**
                         * Creates a Formulation message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.xingqiao.demo.eprescriber.Prescription.Formulation} Formulation
                         */
                        Formulation.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.xingqiao.demo.eprescriber.Prescription.Formulation)
                                return object;
                            let message = new $root.com.xingqiao.demo.eprescriber.Prescription.Formulation();
                            if (object.identifier != null)
                                message.identifier = String(object.identifier);
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.forms != null)
                                message.forms = String(object.forms);
                            if (object.dose != null)
                                message.dose = Number(object.dose);
                            if (object.doseUnit != null)
                                message.doseUnit = String(object.doseUnit);
                            if (object.useage != null)
                                message.useage = String(object.useage);
                            if (object.strength != null)
                                message.strength = String(object.strength);
                            if (object.productName != null)
                                message.productName = String(object.productName);
                            if (object.manufacturer != null)
                                message.manufacturer = String(object.manufacturer);
                            if (object.form != null)
                                message.form = String(object.form);
                            if (object.unit != null)
                                message.unit = String(object.unit);
                            if (object.permitCode != null)
                                message.permitCode = String(object.permitCode);
                            if (object.supervisionCode) {
                                if (!Array.isArray(object.supervisionCode))
                                    throw TypeError(".com.xingqiao.demo.eprescriber.Prescription.Formulation.supervisionCode: array expected");
                                message.supervisionCode = [];
                                for (let i = 0; i < object.supervisionCode.length; ++i)
                                    message.supervisionCode[i] = String(object.supervisionCode[i]);
                            }
                            if (object.amount != null)
                                message.amount = Number(object.amount);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Formulation message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @static
                         * @param {com.xingqiao.demo.eprescriber.Prescription.Formulation} message Formulation
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Formulation.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            let object = {};
                            if (options.arrays || options.defaults)
                                object.supervisionCode = [];
                            if (options.defaults) {
                                object.identifier = "";
                                object.name = "";
                                object.forms = "";
                                object.dose = 0;
                                object.doseUnit = "";
                                object.useage = "";
                                object.strength = "";
                                object.productName = "";
                                object.manufacturer = "";
                                object.form = "";
                                object.unit = "";
                                object.permitCode = "";
                                object.amount = 0;
                            }
                            if (message.identifier != null && message.hasOwnProperty("identifier"))
                                object.identifier = message.identifier;
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.forms != null && message.hasOwnProperty("forms"))
                                object.forms = message.forms;
                            if (message.dose != null && message.hasOwnProperty("dose"))
                                object.dose = options.json && !isFinite(message.dose) ? String(message.dose) : message.dose;
                            if (message.doseUnit != null && message.hasOwnProperty("doseUnit"))
                                object.doseUnit = message.doseUnit;
                            if (message.useage != null && message.hasOwnProperty("useage"))
                                object.useage = message.useage;
                            if (message.strength != null && message.hasOwnProperty("strength"))
                                object.strength = message.strength;
                            if (message.productName != null && message.hasOwnProperty("productName"))
                                object.productName = message.productName;
                            if (message.manufacturer != null && message.hasOwnProperty("manufacturer"))
                                object.manufacturer = message.manufacturer;
                            if (message.form != null && message.hasOwnProperty("form"))
                                object.form = message.form;
                            if (message.unit != null && message.hasOwnProperty("unit"))
                                object.unit = message.unit;
                            if (message.permitCode != null && message.hasOwnProperty("permitCode"))
                                object.permitCode = message.permitCode;
                            if (message.supervisionCode && message.supervisionCode.length) {
                                object.supervisionCode = [];
                                for (let j = 0; j < message.supervisionCode.length; ++j)
                                    object.supervisionCode[j] = message.supervisionCode[j];
                            }
                            if (message.amount != null && message.hasOwnProperty("amount"))
                                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
                            return object;
                        };

                        /**
                         * Converts this Formulation to JSON.
                         * @function toJSON
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Formulation
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Formulation.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Formulation;
                    })();

                    Prescription.Signature = (function() {

                        /**
                         * Properties of a Signature.
                         * @memberof com.xingqiao.demo.eprescriber.Prescription
                         * @interface ISignature
                         * @property {Uint8Array|null} [patientSignature] Signature patientSignature
                         * @property {com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType|null} [patientSignatureType] Signature patientSignatureType
                         * @property {Uint8Array|null} [prescriberSignature] Signature prescriberSignature
                         * @property {com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType|null} [prescriberSignatureType] Signature prescriberSignatureType
                         * @property {Uint8Array|null} [medicalInstitutionSignature] Signature medicalInstitutionSignature
                         * @property {Uint8Array|null} [pharmacistSignature] Signature pharmacistSignature
                         * @property {com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType|null} [pharmacistSignatureType] Signature pharmacistSignatureType
                         * @property {Uint8Array|null} [pharmacistInsitutionSignature] Signature pharmacistInsitutionSignature
                         * @property {Uint8Array|null} [dispenserSignature] Signature dispenserSignature
                         * @property {com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType|null} [dispenserSignatureType] Signature dispenserSignatureType
                         * @property {Uint8Array|null} [dispenserInsitutionSignature] Signature dispenserInsitutionSignature
                         */

                        /**
                         * Constructs a new Signature.
                         * @memberof com.xingqiao.demo.eprescriber.Prescription
                         * @classdesc Represents a Signature.
                         * @implements ISignature
                         * @constructor
                         * @param {com.xingqiao.demo.eprescriber.Prescription.ISignature=} [properties] Properties to set
                         */
                        function Signature(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Signature patientSignature.
                         * @member {Uint8Array} patientSignature
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @instance
                         */
                        Signature.prototype.patientSignature = $util.newBuffer([]);

                        /**
                         * Signature patientSignatureType.
                         * @member {com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType} patientSignatureType
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @instance
                         */
                        Signature.prototype.patientSignatureType = 0;

                        /**
                         * Signature prescriberSignature.
                         * @member {Uint8Array} prescriberSignature
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @instance
                         */
                        Signature.prototype.prescriberSignature = $util.newBuffer([]);

                        /**
                         * Signature prescriberSignatureType.
                         * @member {com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType} prescriberSignatureType
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @instance
                         */
                        Signature.prototype.prescriberSignatureType = 0;

                        /**
                         * Signature medicalInstitutionSignature.
                         * @member {Uint8Array} medicalInstitutionSignature
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @instance
                         */
                        Signature.prototype.medicalInstitutionSignature = $util.newBuffer([]);

                        /**
                         * Signature pharmacistSignature.
                         * @member {Uint8Array} pharmacistSignature
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @instance
                         */
                        Signature.prototype.pharmacistSignature = $util.newBuffer([]);

                        /**
                         * Signature pharmacistSignatureType.
                         * @member {com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType} pharmacistSignatureType
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @instance
                         */
                        Signature.prototype.pharmacistSignatureType = 0;

                        /**
                         * Signature pharmacistInsitutionSignature.
                         * @member {Uint8Array} pharmacistInsitutionSignature
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @instance
                         */
                        Signature.prototype.pharmacistInsitutionSignature = $util.newBuffer([]);

                        /**
                         * Signature dispenserSignature.
                         * @member {Uint8Array} dispenserSignature
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @instance
                         */
                        Signature.prototype.dispenserSignature = $util.newBuffer([]);

                        /**
                         * Signature dispenserSignatureType.
                         * @member {com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType} dispenserSignatureType
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @instance
                         */
                        Signature.prototype.dispenserSignatureType = 0;

                        /**
                         * Signature dispenserInsitutionSignature.
                         * @member {Uint8Array} dispenserInsitutionSignature
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @instance
                         */
                        Signature.prototype.dispenserInsitutionSignature = $util.newBuffer([]);

                        /**
                         * Creates a new Signature instance using the specified properties.
                         * @function create
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @static
                         * @param {com.xingqiao.demo.eprescriber.Prescription.ISignature=} [properties] Properties to set
                         * @returns {com.xingqiao.demo.eprescriber.Prescription.Signature} Signature instance
                         */
                        Signature.create = function create(properties) {
                            return new Signature(properties);
                        };

                        /**
                         * Encodes the specified Signature message. Does not implicitly {@link com.xingqiao.demo.eprescriber.Prescription.Signature.verify|verify} messages.
                         * @function encode
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @static
                         * @param {com.xingqiao.demo.eprescriber.Prescription.ISignature} message Signature message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Signature.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.patientSignature != null && message.hasOwnProperty("patientSignature"))
                                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.patientSignature);
                            if (message.patientSignatureType != null && message.hasOwnProperty("patientSignatureType"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.patientSignatureType);
                            if (message.prescriberSignature != null && message.hasOwnProperty("prescriberSignature"))
                                writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.prescriberSignature);
                            if (message.prescriberSignatureType != null && message.hasOwnProperty("prescriberSignatureType"))
                                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.prescriberSignatureType);
                            if (message.medicalInstitutionSignature != null && message.hasOwnProperty("medicalInstitutionSignature"))
                                writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.medicalInstitutionSignature);
                            if (message.pharmacistSignature != null && message.hasOwnProperty("pharmacistSignature"))
                                writer.uint32(/* id 21, wireType 2 =*/170).bytes(message.pharmacistSignature);
                            if (message.pharmacistSignatureType != null && message.hasOwnProperty("pharmacistSignatureType"))
                                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.pharmacistSignatureType);
                            if (message.pharmacistInsitutionSignature != null && message.hasOwnProperty("pharmacistInsitutionSignature"))
                                writer.uint32(/* id 23, wireType 2 =*/186).bytes(message.pharmacistInsitutionSignature);
                            if (message.dispenserSignature != null && message.hasOwnProperty("dispenserSignature"))
                                writer.uint32(/* id 31, wireType 2 =*/250).bytes(message.dispenserSignature);
                            if (message.dispenserSignatureType != null && message.hasOwnProperty("dispenserSignatureType"))
                                writer.uint32(/* id 32, wireType 0 =*/256).int32(message.dispenserSignatureType);
                            if (message.dispenserInsitutionSignature != null && message.hasOwnProperty("dispenserInsitutionSignature"))
                                writer.uint32(/* id 33, wireType 2 =*/266).bytes(message.dispenserInsitutionSignature);
                            return writer;
                        };

                        /**
                         * Encodes the specified Signature message, length delimited. Does not implicitly {@link com.xingqiao.demo.eprescriber.Prescription.Signature.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @static
                         * @param {com.xingqiao.demo.eprescriber.Prescription.ISignature} message Signature message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Signature.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Signature message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.xingqiao.demo.eprescriber.Prescription.Signature} Signature
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Signature.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.xingqiao.demo.eprescriber.Prescription.Signature();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.patientSignature = reader.bytes();
                                    break;
                                case 2:
                                    message.patientSignatureType = reader.int32();
                                    break;
                                case 11:
                                    message.prescriberSignature = reader.bytes();
                                    break;
                                case 12:
                                    message.prescriberSignatureType = reader.int32();
                                    break;
                                case 13:
                                    message.medicalInstitutionSignature = reader.bytes();
                                    break;
                                case 21:
                                    message.pharmacistSignature = reader.bytes();
                                    break;
                                case 22:
                                    message.pharmacistSignatureType = reader.int32();
                                    break;
                                case 23:
                                    message.pharmacistInsitutionSignature = reader.bytes();
                                    break;
                                case 31:
                                    message.dispenserSignature = reader.bytes();
                                    break;
                                case 32:
                                    message.dispenserSignatureType = reader.int32();
                                    break;
                                case 33:
                                    message.dispenserInsitutionSignature = reader.bytes();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Signature message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.xingqiao.demo.eprescriber.Prescription.Signature} Signature
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Signature.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Signature message.
                         * @function verify
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Signature.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.patientSignature != null && message.hasOwnProperty("patientSignature"))
                                if (!(message.patientSignature && typeof message.patientSignature.length === "number" || $util.isString(message.patientSignature)))
                                    return "patientSignature: buffer expected";
                            if (message.patientSignatureType != null && message.hasOwnProperty("patientSignatureType"))
                                switch (message.patientSignatureType) {
                                default:
                                    return "patientSignatureType: enum value expected";
                                case 0:
                                case 1:
                                    break;
                                }
                            if (message.prescriberSignature != null && message.hasOwnProperty("prescriberSignature"))
                                if (!(message.prescriberSignature && typeof message.prescriberSignature.length === "number" || $util.isString(message.prescriberSignature)))
                                    return "prescriberSignature: buffer expected";
                            if (message.prescriberSignatureType != null && message.hasOwnProperty("prescriberSignatureType"))
                                switch (message.prescriberSignatureType) {
                                default:
                                    return "prescriberSignatureType: enum value expected";
                                case 0:
                                case 1:
                                    break;
                                }
                            if (message.medicalInstitutionSignature != null && message.hasOwnProperty("medicalInstitutionSignature"))
                                if (!(message.medicalInstitutionSignature && typeof message.medicalInstitutionSignature.length === "number" || $util.isString(message.medicalInstitutionSignature)))
                                    return "medicalInstitutionSignature: buffer expected";
                            if (message.pharmacistSignature != null && message.hasOwnProperty("pharmacistSignature"))
                                if (!(message.pharmacistSignature && typeof message.pharmacistSignature.length === "number" || $util.isString(message.pharmacistSignature)))
                                    return "pharmacistSignature: buffer expected";
                            if (message.pharmacistSignatureType != null && message.hasOwnProperty("pharmacistSignatureType"))
                                switch (message.pharmacistSignatureType) {
                                default:
                                    return "pharmacistSignatureType: enum value expected";
                                case 0:
                                case 1:
                                    break;
                                }
                            if (message.pharmacistInsitutionSignature != null && message.hasOwnProperty("pharmacistInsitutionSignature"))
                                if (!(message.pharmacistInsitutionSignature && typeof message.pharmacistInsitutionSignature.length === "number" || $util.isString(message.pharmacistInsitutionSignature)))
                                    return "pharmacistInsitutionSignature: buffer expected";
                            if (message.dispenserSignature != null && message.hasOwnProperty("dispenserSignature"))
                                if (!(message.dispenserSignature && typeof message.dispenserSignature.length === "number" || $util.isString(message.dispenserSignature)))
                                    return "dispenserSignature: buffer expected";
                            if (message.dispenserSignatureType != null && message.hasOwnProperty("dispenserSignatureType"))
                                switch (message.dispenserSignatureType) {
                                default:
                                    return "dispenserSignatureType: enum value expected";
                                case 0:
                                case 1:
                                    break;
                                }
                            if (message.dispenserInsitutionSignature != null && message.hasOwnProperty("dispenserInsitutionSignature"))
                                if (!(message.dispenserInsitutionSignature && typeof message.dispenserInsitutionSignature.length === "number" || $util.isString(message.dispenserInsitutionSignature)))
                                    return "dispenserInsitutionSignature: buffer expected";
                            return null;
                        };

                        /**
                         * Creates a Signature message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.xingqiao.demo.eprescriber.Prescription.Signature} Signature
                         */
                        Signature.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.xingqiao.demo.eprescriber.Prescription.Signature)
                                return object;
                            let message = new $root.com.xingqiao.demo.eprescriber.Prescription.Signature();
                            if (object.patientSignature != null)
                                if (typeof object.patientSignature === "string")
                                    $util.base64.decode(object.patientSignature, message.patientSignature = $util.newBuffer($util.base64.length(object.patientSignature)), 0);
                                else if (object.patientSignature.length)
                                    message.patientSignature = object.patientSignature;
                            switch (object.patientSignatureType) {
                            case "ELECTRONIC":
                            case 0:
                                message.patientSignatureType = 0;
                                break;
                            case "DIGITAL":
                            case 1:
                                message.patientSignatureType = 1;
                                break;
                            }
                            if (object.prescriberSignature != null)
                                if (typeof object.prescriberSignature === "string")
                                    $util.base64.decode(object.prescriberSignature, message.prescriberSignature = $util.newBuffer($util.base64.length(object.prescriberSignature)), 0);
                                else if (object.prescriberSignature.length)
                                    message.prescriberSignature = object.prescriberSignature;
                            switch (object.prescriberSignatureType) {
                            case "ELECTRONIC":
                            case 0:
                                message.prescriberSignatureType = 0;
                                break;
                            case "DIGITAL":
                            case 1:
                                message.prescriberSignatureType = 1;
                                break;
                            }
                            if (object.medicalInstitutionSignature != null)
                                if (typeof object.medicalInstitutionSignature === "string")
                                    $util.base64.decode(object.medicalInstitutionSignature, message.medicalInstitutionSignature = $util.newBuffer($util.base64.length(object.medicalInstitutionSignature)), 0);
                                else if (object.medicalInstitutionSignature.length)
                                    message.medicalInstitutionSignature = object.medicalInstitutionSignature;
                            if (object.pharmacistSignature != null)
                                if (typeof object.pharmacistSignature === "string")
                                    $util.base64.decode(object.pharmacistSignature, message.pharmacistSignature = $util.newBuffer($util.base64.length(object.pharmacistSignature)), 0);
                                else if (object.pharmacistSignature.length)
                                    message.pharmacistSignature = object.pharmacistSignature;
                            switch (object.pharmacistSignatureType) {
                            case "ELECTRONIC":
                            case 0:
                                message.pharmacistSignatureType = 0;
                                break;
                            case "DIGITAL":
                            case 1:
                                message.pharmacistSignatureType = 1;
                                break;
                            }
                            if (object.pharmacistInsitutionSignature != null)
                                if (typeof object.pharmacistInsitutionSignature === "string")
                                    $util.base64.decode(object.pharmacistInsitutionSignature, message.pharmacistInsitutionSignature = $util.newBuffer($util.base64.length(object.pharmacistInsitutionSignature)), 0);
                                else if (object.pharmacistInsitutionSignature.length)
                                    message.pharmacistInsitutionSignature = object.pharmacistInsitutionSignature;
                            if (object.dispenserSignature != null)
                                if (typeof object.dispenserSignature === "string")
                                    $util.base64.decode(object.dispenserSignature, message.dispenserSignature = $util.newBuffer($util.base64.length(object.dispenserSignature)), 0);
                                else if (object.dispenserSignature.length)
                                    message.dispenserSignature = object.dispenserSignature;
                            switch (object.dispenserSignatureType) {
                            case "ELECTRONIC":
                            case 0:
                                message.dispenserSignatureType = 0;
                                break;
                            case "DIGITAL":
                            case 1:
                                message.dispenserSignatureType = 1;
                                break;
                            }
                            if (object.dispenserInsitutionSignature != null)
                                if (typeof object.dispenserInsitutionSignature === "string")
                                    $util.base64.decode(object.dispenserInsitutionSignature, message.dispenserInsitutionSignature = $util.newBuffer($util.base64.length(object.dispenserInsitutionSignature)), 0);
                                else if (object.dispenserInsitutionSignature.length)
                                    message.dispenserInsitutionSignature = object.dispenserInsitutionSignature;
                            return message;
                        };

                        /**
                         * Creates a plain object from a Signature message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @static
                         * @param {com.xingqiao.demo.eprescriber.Prescription.Signature} message Signature
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Signature.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            let object = {};
                            if (options.defaults) {
                                if (options.bytes === String)
                                    object.patientSignature = "";
                                else {
                                    object.patientSignature = [];
                                    if (options.bytes !== Array)
                                        object.patientSignature = $util.newBuffer(object.patientSignature);
                                }
                                object.patientSignatureType = options.enums === String ? "ELECTRONIC" : 0;
                                if (options.bytes === String)
                                    object.prescriberSignature = "";
                                else {
                                    object.prescriberSignature = [];
                                    if (options.bytes !== Array)
                                        object.prescriberSignature = $util.newBuffer(object.prescriberSignature);
                                }
                                object.prescriberSignatureType = options.enums === String ? "ELECTRONIC" : 0;
                                if (options.bytes === String)
                                    object.medicalInstitutionSignature = "";
                                else {
                                    object.medicalInstitutionSignature = [];
                                    if (options.bytes !== Array)
                                        object.medicalInstitutionSignature = $util.newBuffer(object.medicalInstitutionSignature);
                                }
                                if (options.bytes === String)
                                    object.pharmacistSignature = "";
                                else {
                                    object.pharmacistSignature = [];
                                    if (options.bytes !== Array)
                                        object.pharmacistSignature = $util.newBuffer(object.pharmacistSignature);
                                }
                                object.pharmacistSignatureType = options.enums === String ? "ELECTRONIC" : 0;
                                if (options.bytes === String)
                                    object.pharmacistInsitutionSignature = "";
                                else {
                                    object.pharmacistInsitutionSignature = [];
                                    if (options.bytes !== Array)
                                        object.pharmacistInsitutionSignature = $util.newBuffer(object.pharmacistInsitutionSignature);
                                }
                                if (options.bytes === String)
                                    object.dispenserSignature = "";
                                else {
                                    object.dispenserSignature = [];
                                    if (options.bytes !== Array)
                                        object.dispenserSignature = $util.newBuffer(object.dispenserSignature);
                                }
                                object.dispenserSignatureType = options.enums === String ? "ELECTRONIC" : 0;
                                if (options.bytes === String)
                                    object.dispenserInsitutionSignature = "";
                                else {
                                    object.dispenserInsitutionSignature = [];
                                    if (options.bytes !== Array)
                                        object.dispenserInsitutionSignature = $util.newBuffer(object.dispenserInsitutionSignature);
                                }
                            }
                            if (message.patientSignature != null && message.hasOwnProperty("patientSignature"))
                                object.patientSignature = options.bytes === String ? $util.base64.encode(message.patientSignature, 0, message.patientSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.patientSignature) : message.patientSignature;
                            if (message.patientSignatureType != null && message.hasOwnProperty("patientSignatureType"))
                                object.patientSignatureType = options.enums === String ? $root.com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType[message.patientSignatureType] : message.patientSignatureType;
                            if (message.prescriberSignature != null && message.hasOwnProperty("prescriberSignature"))
                                object.prescriberSignature = options.bytes === String ? $util.base64.encode(message.prescriberSignature, 0, message.prescriberSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.prescriberSignature) : message.prescriberSignature;
                            if (message.prescriberSignatureType != null && message.hasOwnProperty("prescriberSignatureType"))
                                object.prescriberSignatureType = options.enums === String ? $root.com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType[message.prescriberSignatureType] : message.prescriberSignatureType;
                            if (message.medicalInstitutionSignature != null && message.hasOwnProperty("medicalInstitutionSignature"))
                                object.medicalInstitutionSignature = options.bytes === String ? $util.base64.encode(message.medicalInstitutionSignature, 0, message.medicalInstitutionSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.medicalInstitutionSignature) : message.medicalInstitutionSignature;
                            if (message.pharmacistSignature != null && message.hasOwnProperty("pharmacistSignature"))
                                object.pharmacistSignature = options.bytes === String ? $util.base64.encode(message.pharmacistSignature, 0, message.pharmacistSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.pharmacistSignature) : message.pharmacistSignature;
                            if (message.pharmacistSignatureType != null && message.hasOwnProperty("pharmacistSignatureType"))
                                object.pharmacistSignatureType = options.enums === String ? $root.com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType[message.pharmacistSignatureType] : message.pharmacistSignatureType;
                            if (message.pharmacistInsitutionSignature != null && message.hasOwnProperty("pharmacistInsitutionSignature"))
                                object.pharmacistInsitutionSignature = options.bytes === String ? $util.base64.encode(message.pharmacistInsitutionSignature, 0, message.pharmacistInsitutionSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.pharmacistInsitutionSignature) : message.pharmacistInsitutionSignature;
                            if (message.dispenserSignature != null && message.hasOwnProperty("dispenserSignature"))
                                object.dispenserSignature = options.bytes === String ? $util.base64.encode(message.dispenserSignature, 0, message.dispenserSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.dispenserSignature) : message.dispenserSignature;
                            if (message.dispenserSignatureType != null && message.hasOwnProperty("dispenserSignatureType"))
                                object.dispenserSignatureType = options.enums === String ? $root.com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType[message.dispenserSignatureType] : message.dispenserSignatureType;
                            if (message.dispenserInsitutionSignature != null && message.hasOwnProperty("dispenserInsitutionSignature"))
                                object.dispenserInsitutionSignature = options.bytes === String ? $util.base64.encode(message.dispenserInsitutionSignature, 0, message.dispenserInsitutionSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.dispenserInsitutionSignature) : message.dispenserInsitutionSignature;
                            return object;
                        };

                        /**
                         * Converts this Signature to JSON.
                         * @function toJSON
                         * @memberof com.xingqiao.demo.eprescriber.Prescription.Signature
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Signature.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * SignatureType enum.
                         * @name com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType
                         * @enum {string}
                         * @property {number} ELECTRONIC=0 ELECTRONIC value
                         * @property {number} DIGITAL=1 DIGITAL value
                         */
                        Signature.SignatureType = (function() {
                            const valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "ELECTRONIC"] = 0;
                            values[valuesById[1] = "DIGITAL"] = 1;
                            return values;
                        })();

                        return Signature;
                    })();

                    return Prescription;
                })();

                return eprescriber;
            })();

            return demo;
        })();

        return xingqiao;
    })();

    return com;
})();

export { $root as default };
