import { z } from 'zod';

export const reminderSchema = z.object({
  reminder_type: z.enum(['birthday', 'anniversary', 'event', 'other']).refine((val) => val !== "", {
    message: "reminder type is required",
}),
  reminder_title: z.string().nonempty('Reminder title is required'),
  description: z.string().default(''),
  how_to_celebrate: z.string().nonempty('How to celebrate is required'),
  event_date: z.date({
    required_error: 'Event date is required',
    invalid_type_error: 'Invalid date format',
  }),
  is_recurring: z.boolean().default(false),
  frequency: z.enum(['weekly', 'monthly', 'yearly']).refine((val) => val !== "", {
    message: "Frequency is required",
}),
  status: z.enum(['enabled', 'disabled']).refine((val) => val !== "", {
    message: "Status is required",
}),
  notifications: z
    .array(
      z.object({
        notification_type: z.enum(['email', 'sms', 'push']),
        date: z.date(),
        message: z.string().default(''),
        status: z.enum(['sent', 'pending', 'failed']),
      })
    )
    .optional(),
});
