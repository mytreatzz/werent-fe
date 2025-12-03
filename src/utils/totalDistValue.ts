export const totalDistValue = (data: Object) => {

    const totalDist = Object.values(data).reduce((sum, value) => {
            // Pastikan nilai adalah angka sebelum ditambahkan
            if (typeof value === 'number') {
                return sum + value;
            }
            return sum; // Abaikan jika bukan angka
        }, 0);

    return totalDist;
}
