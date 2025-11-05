import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";

interface TreatmentPlanFormProps {
  open: boolean;
  onClose: () => void;
  patientName?: string;
  planType?: "physical" | "psychological";
}

export function TreatmentPlanForm({ 
  open, 
  onClose, 
  patientName = "John Smith",
  planType = "physical"
}: TreatmentPlanFormProps) {
  const [diagnosis, setDiagnosis] = useState("");
  const [goals, setGoals] = useState("");
  const [interventions, setInterventions] = useState("");
  const [frequency, setFrequency] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!diagnosis || !goals || !interventions || !frequency || !duration) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success(`Treatment plan updated for ${patientName}`, {
      description: `${planType === "physical" ? "Physical therapy" : "Psychological"} plan created`,
    });

    setDiagnosis("");
    setGoals("");
    setInterventions("");
    setFrequency("");
    setDuration("");
    setNotes("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Update {planType === "physical" ? "Physical Therapy" : "Psychological"} Treatment Plan - {patientName}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="diagnosis">Primary Diagnosis *</Label>
            <Input
              id="diagnosis"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              placeholder={planType === "physical" ? "e.g., Post-stroke rehabilitation" : "e.g., Generalized anxiety disorder"}
              className="rounded-xl"
            />
          </div>

          <div>
            <Label htmlFor="goals">Treatment Goals *</Label>
            <Textarea
              id="goals"
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              placeholder="List specific, measurable goals for the treatment"
              className="rounded-xl"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="interventions">Interventions *</Label>
            <Textarea
              id="interventions"
              value={interventions}
              onChange={(e) => setInterventions(e.target.value)}
              placeholder={planType === "physical" ? "Describe exercises, modalities, and techniques" : "Describe therapeutic approaches and techniques"}
              className="rounded-xl"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="frequency">Session Frequency *</Label>
              <Select value={frequency} onValueChange={setFrequency}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="twice-weekly">Twice weekly</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="biweekly">Biweekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="duration">Treatment Duration *</Label>
              <Input
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g., 6 weeks, 3 months"
                className="rounded-xl"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any special considerations or instructions"
              className="rounded-xl"
              rows={2}
            />
          </div>

          <div className="flex gap-2 justify-end pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="rounded-xl">
              Cancel
            </Button>
            <Button type="submit" className="bg-[#008080] hover:bg-[#008080]/90 text-white rounded-xl">
              Update Treatment Plan
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
