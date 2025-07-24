"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { FileText, Plus, Trash2, Eye } from "lucide-react"

interface FormField {
  id: string
  type: string
  label: string
  required: boolean
  options?: string[]
}

export default function FormsPage() {
  const [formTitle, setFormTitle] = useState("")
  const [formDescription, setFormDescription] = useState("")
  const [fields, setFields] = useState<FormField[]>([])
  const [previewMode, setPreviewMode] = useState(false)

  const fieldTypes = [
    { value: "text", label: "Text Input" },
    { value: "email", label: "Email" },
    { value: "number", label: "Number" },
    { value: "textarea", label: "Text Area" },
    { value: "select", label: "Dropdown" },
    { value: "checkbox", label: "Checkbox" },
    { value: "radio", label: "Radio Buttons" },
    { value: "date", label: "Date" },
  ]

  const addField = () => {
    const newField: FormField = {
      id: `field_${Date.now()}`,
      type: "text",
      label: "",
      required: false,
    }
    setFields([...fields, newField])
  }

  const updateField = (id: string, updates: Partial<FormField>) => {
    setFields(fields.map((field) => (field.id === id ? { ...field, ...updates } : field)))
  }

  const removeField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id))
  }

  const renderFieldPreview = (field: FormField) => {
    switch (field.type) {
      case "text":
      case "email":
      case "number":
      case "date":
        return <Input type={field.type} placeholder={`Enter ${field.label.toLowerCase()}`} />
      case "textarea":
        return <Textarea placeholder={`Enter ${field.label.toLowerCase()}`} />
      case "select":
        return (
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      case "checkbox":
        return (
          <div className="space-y-2">
            {field.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`${field.id}_${index}`} />
                <Label htmlFor={`${field.id}_${index}`}>{option}</Label>
              </div>
            ))}
          </div>
        )
      case "radio":
        return (
          <div className="space-y-2">
            {field.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input type="radio" name={field.id} id={`${field.id}_${index}`} />
                <Label htmlFor={`${field.id}_${index}`}>{option}</Label>
              </div>
            ))}
          </div>
        )
      default:
        return <Input placeholder={`Enter ${field.label.toLowerCase()}`} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <FileText className="h-16 w-16 text-orange-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Form Builder</h1>
          <p className="text-gray-600 mt-2">Create custom forms for registrations, surveys, and assessments</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Builder */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Build Your Form</CardTitle>
                  <CardDescription>Add fields and customize your form</CardDescription>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setPreviewMode(!previewMode)}
                  className="flex items-center gap-2"
                >
                  <Eye className="h-4 w-4" />
                  {previewMode ? "Edit" : "Preview"}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {!previewMode ? (
                <div className="space-y-6">
                  {/* Form Details */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="formTitle">Form Title</Label>
                      <Input
                        id="formTitle"
                        value={formTitle}
                        onChange={(e) => setFormTitle(e.target.value)}
                        placeholder="Enter form title"
                      />
                    </div>
                    <div>
                      <Label htmlFor="formDescription">Form Description</Label>
                      <Textarea
                        id="formDescription"
                        value={formDescription}
                        onChange={(e) => setFormDescription(e.target.value)}
                        placeholder="Enter form description"
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Form Fields</h3>
                      <Button onClick={addField} className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        Add Field
                      </Button>
                    </div>

                    {fields.map((field, index) => (
                      <Card key={field.id} className="p-4">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">Field {index + 1}</h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeField(field.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label>Field Type</Label>
                              <Select
                                value={field.type}
                                onValueChange={(value) => updateField(field.id, { type: value })}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {fieldTypes.map((type) => (
                                    <SelectItem key={type.value} value={type.value}>
                                      {type.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label>Field Label</Label>
                              <Input
                                value={field.label}
                                onChange={(e) => updateField(field.id, { label: e.target.value })}
                                placeholder="Enter field label"
                              />
                            </div>
                          </div>

                          {(field.type === "select" || field.type === "checkbox" || field.type === "radio") && (
                            <div>
                              <Label>Options (one per line)</Label>
                              <Textarea
                                value={field.options?.join("\n") || ""}
                                onChange={(e) =>
                                  updateField(field.id, {
                                    options: e.target.value.split("\n").filter((o) => o.trim()),
                                  })
                                }
                                placeholder="Option 1&#10;Option 2&#10;Option 3"
                                rows={3}
                              />
                            </div>
                          )}

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id={`required_${field.id}`}
                              checked={field.required}
                              onCheckedChange={(checked) => updateField(field.id, { required: !!checked })}
                            />
                            <Label htmlFor={`required_${field.id}`}>Required field</Label>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Save Form</Button>
                </div>
              ) : (
                /* Form Preview */
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold">{formTitle || "Untitled Form"}</h2>
                    {formDescription && <p className="text-gray-600 mt-2">{formDescription}</p>}
                  </div>

                  <form className="space-y-6">
                    {fields.map((field) => (
                      <div key={field.id}>
                        <Label className="flex items-center gap-1">
                          {field.label || "Untitled Field"}
                          {field.required && <span className="text-red-500">*</span>}
                        </Label>
                        <div className="mt-2">{renderFieldPreview(field)}</div>
                      </div>
                    ))}

                    {fields.length > 0 && (
                      <Button type="submit" className="w-full">
                        Submit Form
                      </Button>
                    )}
                  </form>

                  {fields.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      No fields added yet. Switch to edit mode to add fields.
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Form Templates & Saved Forms */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Form Templates</CardTitle>
                <CardDescription>Start with a pre-built template</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Player Registration Form",
                    "Coach Application Form",
                    "Training Session Feedback",
                    "Equipment Request Form",
                    "Event Registration Form",
                    "Skills Assessment Form",
                  ].map((template) => (
                    <Button
                      key={template}
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                      onClick={() => {
                        // Load template logic would go here
                        console.log("Loading template:", template)
                      }}
                    >
                      {template}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Saved Forms</CardTitle>
                <CardDescription>Your previously created forms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Summer Camp Registration", responses: 45 },
                    { name: "Coach Evaluation Form", responses: 12 },
                    { name: "Equipment Feedback", responses: 8 },
                  ].map((form) => (
                    <div key={form.name} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{form.name}</p>
                        <p className="text-sm text-gray-500">{form.responses} responses</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
