import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react"

import Label from "@/components/Form/Label"
import * as Input from "@/components/Input"
import { Button } from "@/components/Button"
import { Select } from "@/components/Form/Select"
import { Textarea } from "@/components/Form/Textarea"
import * as FileInput from "@/components/Form/FileInput"
import { SettingsTabs } from "@/components/SettingsTabs"
import { SelectItem } from "@/components/Form/Select/SelectItem"

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium to-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="flex flex-col mt-6">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="w-full flex flex-col gap-5 mt-6 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <Label text="Name" htmlFor="firstName" />

            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Erik" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="de Souza" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label text="Email address" htmlFor="email" />

            <Input.Root>
              <Input.Prefix>
                <Mail className="w-5 h-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="erik@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label
              htmlFor="photo"
              text="Your photo"
              description="This will be displayed on your profile"
            />

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label text="Role" htmlFor="role" />

            <Input.Root>
              <Input.Control id="role" defaultValue="Dev" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label text="Country" htmlFor="country" />

            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label text="Country" htmlFor="timezone" />

            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label
              text="Country"
              description="Write a short introduction"
              htmlFor="bio"
            />

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold strokeWidth={3} className="w-4 h-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic strokeWidth={3} className="w-4 h-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link strokeWidth={3} className="w-4 h-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List strokeWidth={3} className="w-4 h-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      strokeWidth={3}
                      className="w-4 h-4 text-zinc-500"
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label
              text="Portfolio projects"
              description="Share a few snippets of your work."
              htmlFor="projects"
            />

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
