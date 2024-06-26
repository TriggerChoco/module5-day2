export default function handler(req, res) {
    delete(menuItemId) {
        const db = readDb();
        db.cart = db.cart.filter((item) => item.id !== menuItemId);
        writeDb(db);
      },
}