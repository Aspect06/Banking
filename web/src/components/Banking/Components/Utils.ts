export function FormatCurrency(amount: number) {
    const FormatMoney = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format;

    let amt = 'n/a';

    try {
        amt = FormatMoney(amount);
    } catch (e) {};

    return amt;
}