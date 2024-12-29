export default async function Meal({params}){
    return (
        <>
            <h1>Meal details</h1>
            <p>{params.slug}</p>
        </>
    );
}