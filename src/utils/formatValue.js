export const formatValue = (value) => {
    return value.replace(/\D/g, '') // Удаляем все нецифровые символы
                .replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1 ') // Добавляем пробел после каждых трех цифр
}

export const unformatValue = (formattedValue) => {
    return formattedValue.replace(/\s/g, ''); // Удаляем все пробелы
}