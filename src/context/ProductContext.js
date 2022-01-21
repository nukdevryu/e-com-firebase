import React, { createContext, useEffect, useState } from 'react'
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, setDoc } from "firebase/firestore"
import { app } from '../config/firebase'
import { getStorage, listAll, ref, uploadString } from "firebase/storage"

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const db = getFirestore()
    const storage = getStorage(app, 'gs://e-commerce-3048f.appspot.com')
    const [products, setProducts] = useState([])

    const addProduct = async payload => {
        try {
            const docRef = await addDoc(collection(db, "products"), {
                name: 'Cola',
                price: 12,
                quantity: 1,
                type: 'ETC'
            })
            console.log("Document written with ID: ", docRef.id)
        } catch (e) {
            console.error("Error adding document: ", e)
        }
    }

    const deleteProduct = async payload => {
        try {
            await deleteDoc(doc(db, "products", payload))
        } catch (err) {
            console.log(err)
        }
    }

    const updateProduct = async payload => {
        console.log(payload)
        const prodRef = doc(db, 'products', payload.productId)
        try {
            await setDoc(prodRef, {
                name: payload.name,
                price: payload.price,
                quantity: payload.quantity,
                type: payload.type
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(async () => {
        const querySnapshot = await getDocs(collection(db, "products"))
        setProducts(querySnapshot.docs)
        const listRef = ref(storage, 'products')
        listAll(listRef)
            .then((res) => {
                res.items.forEach((itemRef) => {
                    console.log(itemRef)
                });
            }).catch((error) => {
                console.log(error)
            })
    }, [])


    const productMethods = {
        products,
        addProduct,
        deleteProduct,
        updateProduct
    }

    console.log(products);

    return (
        <ProductContext.Provider value={{ productMethods }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
export { ProductContext }