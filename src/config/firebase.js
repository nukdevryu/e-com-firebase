import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import firebaseConfig from '../config/firebase.json'

export const app = initializeApp(firebaseConfig.config)
export const analytics = getAnalytics(app)