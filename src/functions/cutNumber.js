export default function cutNumber(number) {
    if (number > 99999) {
        return '100k';
    } else if (number > 9999) {
        return number.slice(0,2) + 'k';
    } else if (number > 999) {
        return number.slice(0,1) + 'k';
    } else return number;
}
