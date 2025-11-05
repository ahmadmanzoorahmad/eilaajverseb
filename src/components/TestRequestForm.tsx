import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";

interface TestRequestFormProps {
  open: boolean;
  onClose: () => void;
}

export function TestRequestForm({ open, onClose }: TestRequestFormProps) {
  const [patientName, setPatientName] = useState("");
  const [testType, setTestType] = useState("");
  const [priority, setPriority] = useState("");
  const [sampleType, setSampleType] = useState("");
  const [clinicalNotes, setClinicalNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!patientName || !testType || !priority || !sampleType) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Test request created successfully!", {
      description: `${testType} test for ${patientName}`,
    });

    setPatientName("");
    setTestType("");
    setPriority("");
    setSampleType("");
    setClinicalNotes("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>New Test Request</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="patientName">Patient Name *</Label>
            <Input
              id="patientName"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Enter patient name"
              className="rounded-xl"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="testType">Test Type *</Label>
              <Select value={testType} onValueChange={setTestType}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select test type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blood-work">Blood Work</SelectItem>
                  <SelectItem value="urinalysis">Urinalysis</SelectItem>
                  <SelectItem value="culture">Culture Test</SelectItem>
                  <SelectItem value="biopsy">Biopsy Analysis</SelectItem>
                  <SelectItem value="molecular">Molecular Testing</SelectItem>
                  <SelectItem value="imaging-analysis">Imaging Analysis</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="priority">Priority *</Label>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stat">STAT (Urgent)</SelectItem>
                  <SelectItem value="routine">Routine</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="sampleType">Sample Type *</Label>
            <Select value={sampleType} onValueChange={setSampleType}>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Select sample type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blood">Blood</SelectItem>
                <SelectItem value="urine">Urine</SelectItem>
                <SelectItem value="tissue">Tissue</SelectItem>
                <SelectItem value="swab">Swab</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="clinicalNotes">Clinical Notes</Label>
            <Textarea
              id="clinicalNotes"
              value={clinicalNotes}
              onChange={(e) => setClinicalNotes(e.target.value)}
              placeholder="Enter relevant clinical information"
              className="rounded-xl"
              rows={3}
            />
          </div>

          <div className="flex gap-2 justify-end pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="rounded-xl">
              Cancel
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-[#008080] to-[#00C897] hover:opacity-90 text-white rounded-xl">
              Create Test Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
