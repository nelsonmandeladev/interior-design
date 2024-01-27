import { Button, Input, Textarea } from '@/components'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        < div className='flex flex-col justify-center items-center py-20 mt-10' >
            <div className="max-w-3xl">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-4 flex justify-start items-center gap-3">
                        <div className="p-4 bg-main-green rounded-lg">
                            <MapPin className="text-white text-[20px]" />
                        </div>
                        <p className="m-0 leading-[22px]">
                            43 Raymouth Rd. Baltemoer, London 3910
                        </p>
                    </div>
                    <div className="col-span-4 flex justify-start items-center gap-3">
                        <div className="p-4 bg-main-green rounded-lg">
                            <Phone className="text-white text-[20px]" />
                        </div>
                        <p className="m-0 leading-[22px]">
                            +237 673 954 057
                        </p>
                    </div>
                    <div className="col-span-4 flex justify-start items-center gap-3">
                        <div className="p-4 bg-main-green rounded-lg">
                            <Mail className="text-white text-[20px]" />
                        </div>
                        <p className="m-0 leading-[22px]">
                            info@yourdomain.com
                        </p>
                    </div>
                </div>
                <div className="mt-24 flex flex-col gap-7 justify-start">
                    <div className="w-full grid grid-cols-2 gap-7">
                        <div className="w-full">
                            <Input
                                placeholder='Your first name'
                                className='py-7 bg-white'
                            />
                        </div>
                        <div className="w-full">
                            <Input
                                placeholder='Your last name'
                                className='py-7 bg-white'
                            />
                        </div>
                    </div>
                    <Input
                        placeholder='Your email'
                        className='py-7 bg-white'
                        type='email'
                    />
                    <Textarea
                        placeholder='Your Message'
                    />

                    <div className="mt-5">
                        <Button className='flex justify-center items-center gap-5 py-6 px-10 hover:bg-main-green outline-none ring-0 focus:outline-none focus:right-0'>
                            Send Now <Send />
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
