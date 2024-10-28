'use client'
import React, { useCallback, useState } from 'react';
import OptionSelector from '../_components/optionSelector';
import { Button } from '@/components/ui/button';
import { Select } from '../_components/select';
import { contentType,duration } from '@/utils/selectOptions';
import ImageSelector from '../_components/imageSelector';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';

const CreateNew = () => {
    const [userSelection,setUserSelection]=useState({topic: '', imagetype: '', duration: ''})
    const [customPromptVal,setCustomPromptVal]=useState("")
    const { toast } = useToast()

    const onUserSelect=useCallback((topic,value)=>{
        setUserSelection(prev=>({
            ...prev,
            [topic]:value
        }))
    },[])

    const handleCustomPromptChange=useCallback((e)=>{
        setCustomPromptVal(e.target.value)
    },[])

    const handleCreateShortVideo=()=>{
        if(userSelection.topic=="" || userSelection.imagetype=="" || userSelection.duration==""){
            toast({
                variant: "destructive",
                title: "Uh oh!",
                description: "Please select the necessary options",
              })
            return
        }
        else if(userSelection.topic=="custom_prompt" && customPromptVal==""){
            toast({
                variant: "destructive",
                title: "Uh oh!",
                description: "Please write your custom prompt",
              })
            return
        }

        const topic=userSelection.topic == "custom_prompt" ? customPromptVal :userSelection.topic 

        const prompt="write a script to generate "+userSelection.duration+" video on topic : "+topic+" along with AI image prompt in " +userSelection.imagetype+ " format for each scene and give me result in JSON fromat with imagePrompt and ContentText as field, No Plain text."
        console.log(prompt)
        generateScript(prompt)
    }

    const generateScript=(prompt)=>{
        axios.post("/api/generate-script",{
            prompt
        }).then(res=>console.log(res.data))
    }

    
    return (
        <div className='pt-20'>
            <h2 className='text-primary text-3xl font-bold text-center'>Create New</h2>
            <section className='lg:px-24'>
                <div className='mt-10 shadow-md p-3 lg:p-10'>
                    <OptionSelector title="Content" subtitle="What is the topic of your video?">
                        <Select placeholder="Content Type" title="topic" options={contentType} onOptionChanged={onUserSelect} resetCustomPrompt={setCustomPromptVal}/>
                        {userSelection.topic=='custom_prompt'&&<Textarea onChange={handleCustomPromptChange} className='mt-4' placeholder="Type your idea here."/>}
                    </OptionSelector>
                    <OptionSelector title="Style" subtitle="Select your video style">
                        <ImageSelector title="imagetype" onOptionChanged={onUserSelect}/>
                    </OptionSelector>
                    <OptionSelector title="Duration" subtitle="Select the duration of your video">
                        <Select placeholder="Select Duration" title="duration" options={duration} onOptionChanged={onUserSelect} />
                    </OptionSelector>
                    <Button onClick={handleCreateShortVideo} className='w-full mt-6'>Create short video</Button>
                </div>
            </section>
        </div>
    );
};

export default CreateNew;