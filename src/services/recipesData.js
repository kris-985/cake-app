export const getRecipes = async () =>{
    const url = 'www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'
const options = {
	method: 'GET',
	
};

try {
	const response = await fetch(url, options);
	return await response.json();

} catch (error) {
	console.error(error);
}
}