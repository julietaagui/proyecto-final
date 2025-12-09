import { collection, doc, getDoc, getDocs, addDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase.js';

const COLLECTION = 'products';

export const getAllProducts = async () => {
const col = collection(db, COLLECTION);
const snapshot = await getDocs(col);
const items = [];
snapshot.forEach((docSnap) => {
items.push({ id: docSnap.id, ...docSnap.data() });
});
return items;
};

export const getProductById = async (id) => {
const ref = doc(db, COLLECTION, id);
const snap = await getDoc(ref);
if (!snap.exists()) return null;
return { id: snap.id, ...snap.data() };
};

export const createProduct = async (data) => {
const col = collection(db, COLLECTION);
const createdRef = await addDoc(col, {
name: data.name,
description: data.description || null,
price: Number(data.price) || 0,
stock: Number(data.stock) || 0,
createdAt: new Date().toISOString(),
metadata: data.metadata || {},
});
return { id: createdRef.id, ...data };
};

export const deleteProduct = async (id) => {
const ref = doc(db, COLLECTION, id);
const snap = await getDoc(ref);
if (!snap.exists()) return false;
await deleteDoc(ref);
return true;
};