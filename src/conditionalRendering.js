function Con()
{
    var data="declaring Variable"
    return(
        <div>
           {
               true?
               <p>
                {data}
            </p>
            :
            <p>
                ELSE Statement
            </p>
           }
        </div>
    )
}
export default Con;