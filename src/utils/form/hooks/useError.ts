/**
 * Create useError Custom Hook
 * @type {Hook} useError
 * It is used define Error Messages.
 * 
 * @prams {string} password It is used to match both passwords.
 * @returns {string} message It is used to return error message.
 */

export default function useError(password?: string) {
    return {

        // Check Required Fields
        required: { required: 'This field is required.' },

        // Check Minimum Characters Fields
        minLength: {
            minLength: {
                value: 8,
                message: "Please enter minimum of 8 characters.",
            }
        },

        // Check Email Validation Field
        email: {
            pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Please enter a valid email address."
            }
        },

        // Check Phone Number Validation Field
        number: {
            pattern: {
                value: /^[789]\d{9}$/,
                message: "Please enter a valid phone number."
            }
        },

        // Check Input Characters Fields
        username: {
            pattern: {
                value: /^[a-z0-9]+$/,
                message: "Please use only letter {a-z} and numbers."
            }
        },

        // Check Both Passwords Match
        match: {
            validate: (val: string) => {
                if (password != val) {
                    return "Your passwords do no match";
                }
            }
        },

        // Check Password Validation Fields
        password: {
            validate: (password: string) => {

                // Check if the password contains at least one uppercase letter
                if (!/[A-Z]/.test(password)) {
                    return 'Password must contain at least one uppercase letter';
                }

                // Check if the password contains at least one lowercase letter
                if (!/[a-z]/.test(password)) {
                    return 'Password must contain at least one lowercase letter';
                }

                // Check if the password contains at least one number
                if (!/[0-9]/.test(password)) {
                    return 'Password must contain at least one number';
                }

                // Check if the password contains at least one special characters
                if (!/[~!@#$%^&*()*+,-]/.test(password)) {
                    return 'Password must contain at least one special characters';
                }

            },
        }

    }
    
}