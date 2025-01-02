import { z } from 'zod'

export const reminderSchema1 = z.object({
    reminder_type: z.enum(['birthday', 'anniversary', 'event', 'other']),
    reminder_title: z.string().nonempty(),
    description: z.string().default(''),
    how_to_celebrate: z.string().nonempty(),
})

export const reminderSchema2 = z.object({
    event_date: z.date(),
    is_recurring: z.boolean().default(false),
    frequency: z.enum(['weekly', 'monthy', 'yearly', null]).nullable(),
    status: z.enum(['enabled', 'disabled']),
})

export const reminderSchema3 = z.object({
    notifications: z.array(
        z.object({
            notification_type: z.enum(['email', 'sms', 'push']),
            date: z.date(),
            message: z.string().default(''),
            status: z.enum(['sent', 'pending', 'failed'])
        })
    ).optional()
})