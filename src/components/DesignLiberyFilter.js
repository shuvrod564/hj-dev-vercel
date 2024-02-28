import React from 'react'
import { CustomSelect } from './CustomSelect'
import { Button } from './shared/Button'

export function DesignLiberyFilter() {
    

    return (
        <>
            <form action="#" className="">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-4"> 
                    <div>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Length"
                            required
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Width"
                        />
                    </div>
                    <div>
                        <CustomSelect 
                            size='large'
                            // onChange={handleChange}
                            options={[
                                {
                                    label: 'Floor',
                                    value: 'Floor',
                                },
                                {
                                    label: 'Ground Floor',
                                    value: 'Ground Floor',
                                }, 
                                {
                                    label: 'Top Floor',
                                    value: 'Top Floor',
                                },  
                            ]}
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Autopulate Area"
                        />
                    </div>
                </div>
                <div className="text-right mt-6">
                    <Button text={"Apply"} type="submit" />
                </div>
            </form>
        </>
    )
}
