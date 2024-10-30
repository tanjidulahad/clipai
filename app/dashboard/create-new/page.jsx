'use client'
import React, { useCallback, useState } from 'react';
import OptionSelector from '../_components/optionSelector';
import { Button } from '@/components/ui/button';
import { Select } from '../_components/select';
import { contentType, duration } from '@/utils/selectOptions';
import ImageSelector from '../_components/imageSelector';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import AlertDialogue from './_components/alertDialogue';
import { useUser } from '@clerk/nextjs';
import { useCredit } from '@/app/provider';



const CreateNew = () => {
  const { user } = useUser()
  const{credit,setCredit}=useCredit()
  const [userSelection, setUserSelection] = useState({ topic: '', imagetype: '', duration: '' })
  const [customPromptVal, setCustomPromptVal] = useState("")
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const onUserSelect = useCallback((topic, value) => {
    setUserSelection(prev => ({
      ...prev,
      [topic]: value
    }))
  }, [])

  const handleCustomPromptChange = useCallback((e) => {
    setCustomPromptVal(e.target.value)
  }, [])

  const handleCreateShortVideo = () => {
    if (userSelection.topic == "" || userSelection.imagetype == "" || userSelection.duration == "") {
      toast({
        variant: "destructive",
        title: "Uh oh!",
        description: "Please select the necessary options",
      })
      return
    }
    else if (userSelection.topic == "custom_prompt" && customPromptVal == "") {
      toast({
        variant: "destructive",
        title: "Uh oh!",
        description: "Please write your custom prompt",
      })
      return
    }

    const topic = userSelection.topic == "custom_prompt" ? customPromptVal : userSelection.topic

    const prompt = "write a script to generate " + userSelection.duration + " video on topic : " + topic + " along with AI image prompt in " + userSelection.imagetype + " format for each scene. Also generate a Title and a short description and give me result in JSON fromat with title, description, imagePrompt and ContentText as field, No Plain text."


    generateScript(prompt)

  }

  const generateScript=(prompt)=>{
    setIsLoading(true)
      axios.post("/api/generate-script",{
          prompt
      }).then(res=>{
        const result=res.data.result
        saveToDb(user?.primaryEmailAddress?.emailAddress,result)
      }).catch(e=>{
        setIsLoading(false)
        toast({
          variant: "destructive",
          title: "Uh oh!",
          description: "Something went wrong",
        })
      })
  }

  const saveToDb = (email, content) => {
    axios.post("/api/post-content", {
      email,
      content
    }).then(res => {
      setIsLoading(false)
      toast({
        title: "Successful",
        description: "Your prompt is ready. Go to dashboard to see your content",
      })
      setCredit(prev=>prev-10)
      updateCredit(email)
    }).catch(e=>{
      setIsLoading(false)
    })
  }

  const updateCredit=(email)=>{
    axios.patch("/api/update-credit",{
      email
    }).then()
    .catch(e=>console.log(e))
  }


  return (
    <div className='pt-20'>
      <h2 className='text-primary text-3xl font-bold text-center'>Create New</h2>
      <section className='lg:px-24'>
        <div className='mt-10 shadow-md p-3 lg:p-10'>
          <OptionSelector title="Content" subtitle="What is the topic of your video?">
            <Select placeholder="Content Type" title="topic" options={contentType} onOptionChanged={onUserSelect} resetCustomPrompt={setCustomPromptVal} />
            {userSelection.topic == 'custom_prompt' && <Textarea onChange={handleCustomPromptChange} className='mt-4' placeholder="Type your idea here." />}
          </OptionSelector>
          <OptionSelector title="Style" subtitle="Select your video style">
            <ImageSelector title="imagetype" onOptionChanged={onUserSelect} />
          </OptionSelector>
          <OptionSelector title="Duration" subtitle="Select the duration of your video">
            <Select placeholder="Select Duration" title="duration" options={duration} onOptionChanged={onUserSelect} />
          </OptionSelector>
          <Button onClick={handleCreateShortVideo} className='w-full mt-6' disabled={credit==0}>Create short video</Button>
        </div>
      </section>
      <AlertDialogue isLoading={isLoading} />
    </div>
  );
};

export default CreateNew;