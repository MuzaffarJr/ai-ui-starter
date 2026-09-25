---
name: ux-review
description: Perform a strict product design audit covering UX, UI, hierarchy, responsiveness, interaction, accessibility and implementation quality.
---

# UX REVIEW SKILL

Act as a senior Product Designer, UX Auditor and Design QA Lead.

Do not praise the interface.
Do not redesign immediately.
First inspect, diagnose and rank problems.

# REVIEW METHOD

Audit the interface from the perspective of a first-time user.

Evaluate:

## 1. Information Architecture
- Is the page structure logical?
- Is content grouped correctly?
- Are sections ordered by user intent?
- Is there unnecessary duplication?
- Are labels understandable?

## 2. Visual Hierarchy
- Is the primary action obvious?
- Is the primary content dominant?
- Are secondary elements visually subordinate?
- Are typography scale and spacing consistent?
- Is contrast intentional?

## 3. Layout and Composition
- Is the composition balanced?
- Does spacing create rhythm?
- Are sections too dense or too empty?
- Are elements unnecessarily centered?
- Is there excessive use of cards?
- Are widths and alignments consistent?

## 4. Navigation
- Is navigation easy to understand?
- Are links and CTAs clear?
- Is the user ever unsure what to do next?
- Are desktop and mobile navigation patterns appropriate?

## 5. Interaction Design
- Do buttons feel clickable?
- Are hover, focus, active and disabled states clear?
- Are interactive objects discoverable?
- Do animations reinforce interaction?

## 6. Motion
- Does motion improve understanding?
- Is motion too slow or distracting?
- Are scroll effects overused?
- Are transitions consistent?

## 7. 3D and Visual Effects
- Does 3D support the product story?
- Does it distract from core content?
- Is text legible over effects?
- Does the scene preserve performance?

## 8. Responsive UX
Review separately for:
- desktop
- tablet
- mobile

Check:
- hierarchy changes
- touch target size
- readability
- wrapping
- overflow
- hidden content
- navigation behavior
- simplified effects

## 9. Accessibility
Check:
- contrast
- keyboard navigation
- focus indicators
- reduced motion
- semantic HTML
- touch targets
- readable font sizes

## 10. Product Clarity
A first-time visitor should understand within seconds:
- what this product is
- who it is for
- what problem it solves
- what they can do next

# ISSUE CLASSIFICATION

Classify every issue as:

- Critical — blocks understanding, navigation, usability or accessibility
- Major — significantly weakens hierarchy or task completion
- Minor — visual polish or consistency issue

# OUTPUT FORMAT

## Critical Issues
For each:
- Problem
- Why it matters
- Exact fix

## Major Issues
For each:
- Problem
- Why it matters
- Exact fix

## Minor Issues
For each:
- Problem
- Exact fix

## Desktop Review

## Tablet Review

## Mobile Review

## Priority Fix Order
List the order in which issues should be fixed.

# IMPLEMENTATION RULE

After the audit:

1. Fix Critical issues first.
2. Fix Major issues next.
3. Re-test layout.
4. Re-test responsive behavior.
5. Re-check motion.
6. Only then polish Minor issues.

Do not introduce new visual complexity while fixing UX problems.