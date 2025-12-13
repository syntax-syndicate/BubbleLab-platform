/**
 * Utility to determine if a flow is active.
 * A flow is considered active if:
 * - It has a cron schedule and cronActive is true
 * - It doesn't have a cron schedule and isActive is true (webhook-based)
 *
 * This is the single source of truth for flow active status.
 */
export function isFlowActive(flow: {
  cronSchedule?: string | null;
  cronActive?: boolean;
  isActive?: boolean;
}): boolean {
  if (flow.cronSchedule) {
    return flow.cronActive === true;
  }
  return flow.isActive === true;
}

export type FlowActiveFilter = 'all' | 'active' | 'inactive';
