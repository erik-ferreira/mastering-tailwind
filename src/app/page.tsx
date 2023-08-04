import { SettingsTabs } from "@/components/SettingsTabs"

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
            <button
              type="button"
              className="text-sm font-semibold px-4 py-2 border border-zinc-300 rounded-lg text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-sm font-semibold text-white px-4 py-2 rounded-lg shadow-sm bg-violet-600 hover:bg-violet-700"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>

        <form id="settings" className="w-full flex flex-col mt-6">
          form
        </form>
      </div>
    </>
  )
}
