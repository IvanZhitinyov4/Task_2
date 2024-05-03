const loginRegEx : RegExp = /^[a-zA-Z0-9]{4,30}$/;
const phoneNumberRegEx : RegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
const passwordRegEx: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/;

export const loginValidation = {
    required: 'Поле пустое',
    validate: (login: string) => {
        if (!loginRegEx.test(login)) {
            return 'Логин должен содержать только латинские буквы и цифры и быть длиной от 4 до 30 символов'
        }
        return true;
    }
}

export const phoneNumberValidation = {
    required: 'Поле пустое',
    validate: (phoneNumber: string) => {
        if (!phoneNumberRegEx.test(phoneNumber)) {
            return 'Номер введён неправильно'
        }
        return true;
    }
}

export const passwordValidation = {
    required: 'Поле пустое',
    validate: (password: string) => {
        if (!passwordRegEx.test(password)) {
            return 'Пароль должен содержать латинские буквы и цифры и быть длиной от 8 до 24 символов'
        }
        return true;
    }
}