import { FieldsConfig } from "./types";

export const config: FieldsConfig = {
  fields: {
    // Authenticatiion
    email: {
      isRequired: { message: "דרוש דואר אלקטרוני" },
      isNotEmail: { message: "כתובת דוא\"ל לא תקינה" },
    },

    password: {
      isRequired: { message: "דרושה סיסמה" },
      isTooShortPass: { message: "על הסיסמה להיות באורך 8 תווים לפחות" },
      isNotStrongPass: { message: "על הסיסמה לכלול אותיות גדולות וקטנות באנגלית ומספרים" },
    },

    confirmPassword: {
      isRequired: { message: "יש לחזור על הסיסמה החדשה" },
    },

    username: {
      isRequired: { message: "דרוש שם משתמש" },
    },

    firstName: {
      isRequired: { message: "דרוש שם פרטי" },
    },

    lastName: {
      isRequired: { message: "דרוש שם משפחה" },
    },
  },
};
