import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const SizeGuide = () => {
    const sizeGuide = {
        sizes: [
            {
                size: "Small (S)",
                chest: "34-36 inches (86-91 cm)",
                length: "27 inches (68.5 cm)"
            },
            {
                size: "Medium (M)",
                chest: "38-40 inches (96-101 cm)",
                length: "28 inches (71 cm)"
            },
            {
                size: "Large (L)",
                chest: "42-44 inches (106-112 cm)",
                length: "29 inches (73.5 cm)"
            },
            {
                size: "X-Large (XL)",
                chest: "46-48 inches (116-122 cm)",
                length: "30 inches (76 cm)"
            },
            {
                size: "XX-Large (XXL)",
                chest: "50-52 inches (127-132 cm)",
                length: "31 inches (79 cm)"
            }
        ],
        instructions: "To find your perfect size, measure around the fullest part of your chest and compare with the chart above. For length, measure from the highest point on your shoulder down to your waist."
    };

    return (
        <>
            <section className='bg-background_1 py-6'>
                <div className='max-w-screen-lg mx-auto text-center text-color_2 p-6'>
                    <h1 className='text-4xl capitalize underline'>Size Guide</h1>
                    <div className='text-lg flex flex-col gap-6 text-left my-6'>
                        <div className='flex-col flex gap-8'>
                            <Table>
                                <TableCaption className='text-xl'>A list of sizes</TableCaption>
                                <TableHeader>
                                    <TableRow className='text-xl'>
                                        <TableHead>Size</TableHead>
                                        <TableHead>Chest</TableHead>
                                        <TableHead>Length</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        sizeGuide['sizes'].map((size,index)=>{
                                            return <TableRow key={index}>
                                            <TableCell>{size.size}</TableCell>
                                            <TableCell>{size.chest}</TableCell>
                                            <TableCell>{size.length}</TableCell>
                                        </TableRow>
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </div>
                        <div>
                            <p>{sizeGuide['instructions']}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SizeGuide