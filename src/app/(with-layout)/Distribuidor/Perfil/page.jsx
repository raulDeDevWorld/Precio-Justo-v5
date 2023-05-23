'use client'
import { useEffect, useState } from 'react'

import { useUser } from '../../../../context/Context.js'
import Image from 'next/image'
import Link from 'next/link'
import Select from '../../../../components/Select'
import Button from '../../../../components/Button'
import { useMask } from '@react-input/mask';
import { useRouter } from 'next/navigation';

import Subtitle from '@/components/Subtitle'
import Paragraph from '@/components/Paragraph'




export default function Home() {
    const router = useRouter()

    const { user, userDB, setUserData } = useUser()

    const [state, setState] = useState({})

    console.log(userDB)

    return (


        <main className='w-full bg-purple-100'>
            <img src="/business.svg" alt="" />
            <br />
            <h3 className='w-full'>{userDB['Nombre']}</h3>
            <br />
            <h3 className='text-sm'>Abierto</h3>
            <br />
            <br />
            <br />
            <Subtitle>Quienes Somos</Subtitle>
            <Paragraph> {userDB['Descripcion']}</Paragraph>
            <br />
            <Subtitle>Dias de atención</Subtitle>

            <br />

            <div className=''>
                <input type="checkbox" id="L" name="L" checked={userDB['L'] ? true : false} readOnly />
                <label htmlFor="L">L</label>
                <input type="checkbox" id="M" name="M" checked={userDB['M'] ? true : false} readOnly />
                <label htmlFor="M">M</label>
                <input type="checkbox" id="M" name="Mi" checked={userDB['Mi'] ? true : false} readOnly />
                <label htmlFor="M">M</label>
                <input type="checkbox" id="J" name="J" checked={userDB['J'] ? true : false} readOnly />
                <label htmlFor="J">J</label>
                <input type="checkbox" id="V" name="V" checked={userDB['V'] ? true : false} readOnly />
                <label htmlFor="V">V</label>
                <input type="checkbox" id="S" name="S" checked={userDB['S'] ? true : false} readOnly />
                <label htmlFor="S">S</label>
                <input type="checkbox" id="D" name="D" checked={userDB['D'] ? true : false} readOnly />
                <label htmlFor="D">D</label>
            </div>
            <br />
            <Subtitle>Horarios De Atención</Subtitle>
            <Paragraph> {userDB['Descripcion']}</Paragraph>
            <p className=''>{userDB['timeInit']} - {userDB['timeFinish']}</p>
            <br />
            <Subtitle>Categorias</Subtitle>

            <Subtitle>Contactos</Subtitle>


            <div className=''>
                <Paragraph> <img src="/telefono.svg" alt="" />{userDB['Telefono']}</Paragraph>
                <Paragraph> <img src="/telefono.svg" alt="" />{userDB['Telefono']}</Paragraph>
            </div>
            <br />
            <Button styled='buttonSecondary'>Solicitar Ficha</Button>


        </main>


    )
}
