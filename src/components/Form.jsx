import React from 'react'
import { Button } from 'flowbite-react/lib/cjs/components/Button'
import { Checkbox } from 'flowbite-react/lib/cjs/components/FormControls/Checkbox'
import { Label } from 'flowbite-react/lib/cjs/components/FormControls/Label'
import { Textarea } from 'flowbite-react/lib/cjs/components/FormControls/Textarea'
import { TextInput } from 'flowbite-react/lib/cjs/components/FormControls/TextInput'

function Form() {
  return (
    <>
      <div className='form-container justify-center'>
            <form className="flex flex-col gap-4 w-1/2 justify-center">
                <div>
                <div className="mb-2 block">
                    <Label htmlFor="email2" value="Your email" />
                </div>
                <TextInput id="email2" type="email" placeholder="name@flowbite.com" required={true} shadow={true} />
                </div>
                <div>
                <div className="mb-2 block">
                    <Label htmlFor="password2" value="Your password" />
                </div>
                <TextInput id="password2" type="password" required={true} shadow={true} />
                </div>

                <div id="textarea">
  <div className="mb-2 block">
    <Label
      htmlFor="comment"
      value="Your message"
    />
  </div>
  <Textarea
    id="comment"
    placeholder="Leave a comment..."
    required={true}
    rows={4}
  />
</div>

                <div className="flex items-center gap-2">
                <Checkbox id="agree" />
                <Label htmlFor="agree">I agree with the{' '}
                    <a href="/forms" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
                </Label>
                </div>
                <Button type="submit">Register new account</Button>
            </form>
      </div>
    </>
  )
}

export default Form