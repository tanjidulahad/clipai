import React from 'react';
import OptionSelector from '../_components/optionSelector';
import { Button } from '@/components/ui/button';
import { Select } from '../_components/select';
import { contentType,duration } from '@/utils/selectOptions';
import ImageSelector from '../_components/imageSelector';

const CreateNew = () => {
    return (
        <div className='pt-20'>
            <h2 className='text-primary text-3xl font-bold text-center'>Create New</h2>
            <section className='lg:px-24'>
                <div className='mt-10 shadow-md p-3 lg:p-10'>
                    <OptionSelector title="Content" subtitle="What is the topic of your video?">
                        <Select placeholder="Content Type" options={contentType}/>
                    </OptionSelector>
                    <OptionSelector title="Style" subtitle="Select your video style">
                        <ImageSelector/>
                    </OptionSelector>
                    <OptionSelector title="Duration" subtitle="Select the duration of your video">
                        <Select placeholder="Select Duration" options={duration}/>
                    </OptionSelector>
                    <Button className='w-full mt-6'>Create short video</Button>
                </div>
            </section>
        </div>
    );
};

export default CreateNew;