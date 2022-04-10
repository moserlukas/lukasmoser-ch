import { GetServerSideProps } from "next"
import { Character, GetCharacterResults } from "../../types"


export default function CharacterPage({ character }: { character: Character }) {

    return <div>Character {character.name}
        <p>{JSON.stringify(character)}</p>
    </div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const res = await fetch("https://rickandmortyapi.com/api/character/" + context.query.id)
    const character: Character = await res.json()

    return {
        props: {
            character
        }
    }
}