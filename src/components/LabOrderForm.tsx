import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";

interface LabOrderFormProps {
  open: boolean;
  onClose: () => void;
  patientName?: string;
}

const commonTests = [
  { id: "cbc", name: "Complete Blood Count (CBC)" },
  { id: "bmp", name: "Basic Metabolic Panel (BMP)" },
  { id: "lipid", name: "Lipid Panel" },
  { id: "hba1c", name: "HbA1c (Diabetes)" },
  { id: "tsh", name: "Thyroid Stimulating Hormone (TSH)" },
  { id: "vitamin-d", name: "Vitamin D" },
  { id: "liver", name: "Liver Function Tests" },
  { id: "kidney", name: "Kidney Function Tests" },
];

export function LabOrderForm({ open, onClose, patientName = "Sarah Martinez" }: LabOrderFormProps) {
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  const toggleTest = (testId: string) => {
    setSelectedTests(prev =>
      prev.includes(testId)
        ? prev.filter(id => id !== testId)
        : [...prev, testId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedTests.length === 0) {
      toast.error("Please select at least one test");
      return;
    }

    const testNames = selectedTests.map(id => 
      commonTests.find(t => t.id === id)?.name
    ).join(", ");

    toast.success(`Lab order created for ${patientName}`, {
      description: `${selectedTests.length} test(s) ordered`,
    });

    setSelectedTests([]);
    setNotes("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Order Lab Tests for {patientName}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="mb-3 block">Select Tests *</Label>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {commonTests.map(test => (
                <div key={test.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={test.id}
                    checked={selectedTests.includes(test.id)}
                    onCheckedChange={() => toggleTest(test.id)}
                  />
                  <label
                    htmlFor={test.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {test.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="notes">Clinical Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter any relevant clinical information or special instructions"
              className="rounded-xl"
              rows={3}
            />
          </div>

          <div className="flex gap-2 justify-end pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="rounded-xl">
              Cancel
            </Button>
            <Button type="submit" className="bg-[#008080] hover:bg-[#008080]/90 text-white rounded-xl">
              Order Tests ({selectedTests.length})
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
