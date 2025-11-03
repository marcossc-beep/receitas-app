const url = 'http://localhost:3000'

export async function getRecipes() {
    const request = `${url}/receitas`
    try {
        const response = await fetch(request, {
            method: 'GET'
        })
        const data = await response.json()
        return data
    } catch (e) {

    }
}