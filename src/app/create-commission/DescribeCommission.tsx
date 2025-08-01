import { FormProps, Form } from "./FormTypes";

export default function DescribeCommission(props: FormProps) {
  const { form, setForm } = props;

  return (
    <div className="flex flex-row mb-[0px] m-0 gap-8 items-start justify-start">
    <div className="flex flex-col w-[230px] m-0">
      <p className="text-[14px] font-[700] m-0">Describe Your Commission</p>
    </div>
    <div className="flex-1">
      <textarea
        placeholder="Description"
        rows={3}
        className="w-full resize-none text-[12px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
        value={form.description}
        onChange={e => setForm((f: Form) => ({ ...f, description: e.target.value }))}
        maxLength={250}
      />
      <div className="text-right text-xs text-gray-400">
        {form.description.length}/200
      </div>
    </div>
  </div>
  )
}