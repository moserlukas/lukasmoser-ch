import { Character, GetCharacterResults } from "../../types"


export default function CharacterPage({ character }: { character: Character }) {

    return <div>Character {character.name}</div>
}

export async function getStaticPaths() {
    const res = await fetch("https://rickandmortyapi.com/api/character/")
    const { results }: GetCharacterResults = await res.json()

    return {
        paths: results.map((character) => {
            return {
                params: {
                    id: String(character.id)
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }: { params: { id: string } }) {

    const res = await fetch("https://rickandmortyapi.com/api/character/" + params.id)
    const character: Character = await res.json()

    return {
        props: {
            character
        }
    }
}