export const baseUrl = {
    name: 'https://localhost:44375'
} 

export default {
    cars(url = baseUrl.name + '/api/Cars'){
        return {
            fetchAll: async () => await fetch(url)
        }
    }
}