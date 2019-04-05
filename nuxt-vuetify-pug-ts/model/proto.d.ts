import * as $protobuf from 'protobufjs'
/** Namespace com. */
export namespace com {
  /** Namespace xingqiao. */
  namespace xingqiao {
    /** Namespace demo. */
    namespace demo {
      /** Namespace eprescriber. */
      namespace eprescriber {
        type Long = number

        /** Properties of a Prescription. */
        interface IPrescription {
          /** Prescription id */
          id?: string | null

          /** Prescription name */
          name?: string | null

          /** Prescription identifier */
          identifier?: string | null

          /** Prescription gender */
          gender?: com.xingqiao.demo.eprescriber.Prescription.Gender | null

          /** Prescription age */
          age?: string | null

          /** Prescription phone */
          phone?: string | null

          /** Prescription hisId */
          hisId?: string | null

          /** Prescription weight */
          weight?: string | null

          /** Prescription height */
          height?: string | null

          /** Prescription drugAllergies */
          drugAllergies?: string | null

          /** Prescription conditions */
          conditions?: string[] | null

          /** Prescription diagnosis */
          diagnosis?: string | null

          /** Prescription pharmaceuticalFormulation */
          pharmaceuticalFormulation?:
            | com.xingqiao.demo.eprescriber.Prescription.IFormulation[]
            | null

          /** Prescription useDirections */
          useDirections?: string | null

          /** Prescription issueDate */
          issueDate?: number | Long | null

          /** Prescription expiryDate */
          expiryDate?: number | Long | null

          /** Prescription prescriber */
          prescriber?: string | null

          /** Prescription institution */
          institution?: string | null

          /** Prescription department */
          department?: string | null

          /** Prescription pharmacist */
          pharmacist?: string | null

          /** Prescription pharmacistInstitution */
          pharmacistInstitution?: string | null

          /** Prescription dispenser */
          dispenser?: string | null

          /** Prescription dispenserInstitution */
          dispenserInstitution?: string | null

          /** Prescription signature */
          signature?: com.xingqiao.demo.eprescriber.Prescription.ISignature | null
        }

        /** Represents a Prescription. */
        class Prescription implements IPrescription {
          /**
           * Constructs a new Prescription.
           * @param [properties] Properties to set
           */
          constructor(properties?: com.xingqiao.demo.eprescriber.IPrescription)

          /** Prescription id. */
          public id: string

          /** Prescription name. */
          public name: string

          /** Prescription identifier. */
          public identifier: string

          /** Prescription gender. */
          public gender: com.xingqiao.demo.eprescriber.Prescription.Gender

          /** Prescription age. */
          public age: string

          /** Prescription phone. */
          public phone: string

          /** Prescription hisId. */
          public hisId: string

          /** Prescription weight. */
          public weight: string

          /** Prescription height. */
          public height: string

          /** Prescription drugAllergies. */
          public drugAllergies: string

          /** Prescription conditions. */
          public conditions: string[]

          /** Prescription diagnosis. */
          public diagnosis: string

          /** Prescription pharmaceuticalFormulation. */
          public pharmaceuticalFormulation: com.xingqiao.demo.eprescriber.Prescription.IFormulation[]

          /** Prescription useDirections. */
          public useDirections: string

          /** Prescription issueDate. */
          public issueDate: number | Long

          /** Prescription expiryDate. */
          public expiryDate: number | Long

          /** Prescription prescriber. */
          public prescriber: string

          /** Prescription institution. */
          public institution: string

          /** Prescription department. */
          public department: string

          /** Prescription pharmacist. */
          public pharmacist: string

          /** Prescription pharmacistInstitution. */
          public pharmacistInstitution: string

          /** Prescription dispenser. */
          public dispenser: string

          /** Prescription dispenserInstitution. */
          public dispenserInstitution: string

          /** Prescription signature. */
          public signature?: com.xingqiao.demo.eprescriber.Prescription.ISignature | null

          /**
           * Creates a new Prescription instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Prescription instance
           */
          public static create(
            properties?: com.xingqiao.demo.eprescriber.IPrescription
          ): com.xingqiao.demo.eprescriber.Prescription

          /**
           * Encodes the specified Prescription message. Does not implicitly {@link com.xingqiao.demo.eprescriber.Prescription.verify|verify} messages.
           * @param message Prescription message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: com.xingqiao.demo.eprescriber.IPrescription,
            writer?: $protobuf.Writer
          ): $protobuf.Writer

          /**
           * Encodes the specified Prescription message, length delimited. Does not implicitly {@link com.xingqiao.demo.eprescriber.Prescription.verify|verify} messages.
           * @param message Prescription message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
            message: com.xingqiao.demo.eprescriber.IPrescription,
            writer?: $protobuf.Writer
          ): $protobuf.Writer

          /**
           * Decodes a Prescription message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns Prescription
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): com.xingqiao.demo.eprescriber.Prescription

          /**
           * Decodes a Prescription message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns Prescription
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): com.xingqiao.demo.eprescriber.Prescription

          /**
           * Verifies a Prescription message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null

          /**
           * Creates a Prescription message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns Prescription
           */
          public static fromObject(object: {
            [k: string]: any
          }): com.xingqiao.demo.eprescriber.Prescription

          /**
           * Creates a plain object from a Prescription message. Also converts values to other types if specified.
           * @param message Prescription
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: com.xingqiao.demo.eprescriber.Prescription,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any }

          /**
           * Converts this Prescription to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any }
        }

        namespace Prescription {
          /** Gender enum. */
          enum Gender {
            UNKNOWN = 0,
            MALE = 1,
            FEMALE = 2
          }

          /** Properties of a Formulation. */
          interface IFormulation {
            /** Formulation identifier */
            identifier?: string | null

            /** Formulation name */
            name?: string | null

            /** Formulation forms */
            forms?: string | null

            /** Formulation dose */
            dose?: number | null

            /** Formulation doseUnit */
            doseUnit?: string | null

            /** Formulation useage */
            useage?: string | null

            /** Formulation strength */
            strength?: string | null

            /** Formulation productName */
            productName?: string | null

            /** Formulation manufacturer */
            manufacturer?: string | null

            /** Formulation form */
            form?: string | null

            /** Formulation unit */
            unit?: string | null

            /** Formulation permitCode */
            permitCode?: string | null

            /** Formulation supervisionCode */
            supervisionCode?: string[] | null

            /** Formulation amount */
            amount?: number | null
          }

          /** Represents a Formulation. */
          class Formulation implements IFormulation {
            /**
             * Constructs a new Formulation.
             * @param [properties] Properties to set
             */
            constructor(
              properties?: com.xingqiao.demo.eprescriber.Prescription.IFormulation
            )

            /** Formulation identifier. */
            public identifier: string

            /** Formulation name. */
            public name: string

            /** Formulation forms. */
            public forms: string

            /** Formulation dose. */
            public dose: number

            /** Formulation doseUnit. */
            public doseUnit: string

            /** Formulation useage. */
            public useage: string

            /** Formulation strength. */
            public strength: string

            /** Formulation productName. */
            public productName: string

            /** Formulation manufacturer. */
            public manufacturer: string

            /** Formulation form. */
            public form: string

            /** Formulation unit. */
            public unit: string

            /** Formulation permitCode. */
            public permitCode: string

            /** Formulation supervisionCode. */
            public supervisionCode: string[]

            /** Formulation amount. */
            public amount: number

            /**
             * Creates a new Formulation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Formulation instance
             */
            public static create(
              properties?: com.xingqiao.demo.eprescriber.Prescription.IFormulation
            ): com.xingqiao.demo.eprescriber.Prescription.Formulation

            /**
             * Encodes the specified Formulation message. Does not implicitly {@link com.xingqiao.demo.eprescriber.Prescription.Formulation.verify|verify} messages.
             * @param message Formulation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(
              message: com.xingqiao.demo.eprescriber.Prescription.IFormulation,
              writer?: $protobuf.Writer
            ): $protobuf.Writer

            /**
             * Encodes the specified Formulation message, length delimited. Does not implicitly {@link com.xingqiao.demo.eprescriber.Prescription.Formulation.verify|verify} messages.
             * @param message Formulation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(
              message: com.xingqiao.demo.eprescriber.Prescription.IFormulation,
              writer?: $protobuf.Writer
            ): $protobuf.Writer

            /**
             * Decodes a Formulation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Formulation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(
              reader: $protobuf.Reader | Uint8Array,
              length?: number
            ): com.xingqiao.demo.eprescriber.Prescription.Formulation

            /**
             * Decodes a Formulation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Formulation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(
              reader: $protobuf.Reader | Uint8Array
            ): com.xingqiao.demo.eprescriber.Prescription.Formulation

            /**
             * Verifies a Formulation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string | null

            /**
             * Creates a Formulation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Formulation
             */
            public static fromObject(object: {
              [k: string]: any
            }): com.xingqiao.demo.eprescriber.Prescription.Formulation

            /**
             * Creates a plain object from a Formulation message. Also converts values to other types if specified.
             * @param message Formulation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(
              message: com.xingqiao.demo.eprescriber.Prescription.Formulation,
              options?: $protobuf.IConversionOptions
            ): { [k: string]: any }

            /**
             * Converts this Formulation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any }
          }

          /** Properties of a Signature. */
          interface ISignature {
            /** Signature patientSignature */
            patientSignature?: Uint8Array | null

            /** Signature patientSignatureType */
            patientSignatureType?: com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType | null

            /** Signature prescriberSignature */
            prescriberSignature?: Uint8Array | null

            /** Signature prescriberSignatureType */
            prescriberSignatureType?: com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType | null

            /** Signature medicalInstitutionSignature */
            medicalInstitutionSignature?: Uint8Array | null

            /** Signature pharmacistSignature */
            pharmacistSignature?: Uint8Array | null

            /** Signature pharmacistSignatureType */
            pharmacistSignatureType?: com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType | null

            /** Signature pharmacistInsitutionSignature */
            pharmacistInsitutionSignature?: Uint8Array | null

            /** Signature dispenserSignature */
            dispenserSignature?: Uint8Array | null

            /** Signature dispenserSignatureType */
            dispenserSignatureType?: com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType | null

            /** Signature dispenserInsitutionSignature */
            dispenserInsitutionSignature?: Uint8Array | null
          }

          /** Represents a Signature. */
          class Signature implements ISignature {
            /**
             * Constructs a new Signature.
             * @param [properties] Properties to set
             */
            constructor(
              properties?: com.xingqiao.demo.eprescriber.Prescription.ISignature
            )

            /** Signature patientSignature. */
            public patientSignature: Uint8Array

            /** Signature patientSignatureType. */
            public patientSignatureType: com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType

            /** Signature prescriberSignature. */
            public prescriberSignature: Uint8Array

            /** Signature prescriberSignatureType. */
            public prescriberSignatureType: com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType

            /** Signature medicalInstitutionSignature. */
            public medicalInstitutionSignature: Uint8Array

            /** Signature pharmacistSignature. */
            public pharmacistSignature: Uint8Array

            /** Signature pharmacistSignatureType. */
            public pharmacistSignatureType: com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType

            /** Signature pharmacistInsitutionSignature. */
            public pharmacistInsitutionSignature: Uint8Array

            /** Signature dispenserSignature. */
            public dispenserSignature: Uint8Array

            /** Signature dispenserSignatureType. */
            public dispenserSignatureType: com.xingqiao.demo.eprescriber.Prescription.Signature.SignatureType

            /** Signature dispenserInsitutionSignature. */
            public dispenserInsitutionSignature: Uint8Array

            /**
             * Creates a new Signature instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Signature instance
             */
            public static create(
              properties?: com.xingqiao.demo.eprescriber.Prescription.ISignature
            ): com.xingqiao.demo.eprescriber.Prescription.Signature

            /**
             * Encodes the specified Signature message. Does not implicitly {@link com.xingqiao.demo.eprescriber.Prescription.Signature.verify|verify} messages.
             * @param message Signature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(
              message: com.xingqiao.demo.eprescriber.Prescription.ISignature,
              writer?: $protobuf.Writer
            ): $protobuf.Writer

            /**
             * Encodes the specified Signature message, length delimited. Does not implicitly {@link com.xingqiao.demo.eprescriber.Prescription.Signature.verify|verify} messages.
             * @param message Signature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(
              message: com.xingqiao.demo.eprescriber.Prescription.ISignature,
              writer?: $protobuf.Writer
            ): $protobuf.Writer

            /**
             * Decodes a Signature message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Signature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(
              reader: $protobuf.Reader | Uint8Array,
              length?: number
            ): com.xingqiao.demo.eprescriber.Prescription.Signature

            /**
             * Decodes a Signature message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Signature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(
              reader: $protobuf.Reader | Uint8Array
            ): com.xingqiao.demo.eprescriber.Prescription.Signature

            /**
             * Verifies a Signature message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string | null

            /**
             * Creates a Signature message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Signature
             */
            public static fromObject(object: {
              [k: string]: any
            }): com.xingqiao.demo.eprescriber.Prescription.Signature

            /**
             * Creates a plain object from a Signature message. Also converts values to other types if specified.
             * @param message Signature
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(
              message: com.xingqiao.demo.eprescriber.Prescription.Signature,
              options?: $protobuf.IConversionOptions
            ): { [k: string]: any }

            /**
             * Converts this Signature to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any }
          }

          namespace Signature {
            /** SignatureType enum. */
            enum SignatureType {
              ELECTRONIC = 0,
              DIGITAL = 1
            }
          }
        }
      }
    }
  }
}
