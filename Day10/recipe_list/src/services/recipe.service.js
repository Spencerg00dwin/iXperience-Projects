import {
    collection,
    addDoc,
    doc,
    deleteDoc,
    query,
    getDocs
} from 'firebase/firestore'

import { firestore } from '../firebase/firebase'
import { Recipes } from '../models/task'

class RecipeService {

    async createRecipe(recipe) {
        const collectionReference = collection(firestore, 'recipes')
        const docRef = await addDoc(collectionReference, {
            name: recipe.recipeName,
            description: recipe.description
        })
        recipe.id = docRef.id
        return recipe;
    }

    async readRecipe(recipe) {
        const collectionReference = collection(firestore, 'recipes')
        const q = query(collectionReference)
        const querySnapshot = await getDocs(q);

        const recipes = []

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const recipe = new Recipes(
                data.name,
                data.description,
                doc.id
            )
            recipes.push(recipe);
        })

        return recipes
    }

    async updateRecipe(recipe) {
        
    }

    async deleteRecipe(recipe) {
        const docRef =  doc(firestore, 'recipes', recipe.id)
        await deleteDoc(docRef);
    }
}

const service = new RecipeService()
export default service;