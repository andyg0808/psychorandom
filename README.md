---
bibliography: bibliography.bib
...
# Psychorandom
*Sort items into an order which appears more random than true randomness*
---

[@kahneman1972] showed that humans do not perceive sequences which are
statistically equally-likely as being equally likely. Among the explanations
proposed for this, [@hahn2009] present an argument that such a perception is,
in fact, statistically viable, under the assumption that human experience is of
finite length.

We want to try to shuffle items in a way which humans will perceive as "more
random" than if they were truly randomly shuffled. Psychorandom attempts to
achieve this by constraining a random shuffle to not include related items
"near" each other. "Near" is currently defined as being closer than ten items
away. This number was chosen based on the estimate of human short-term memory
capacity as being "7 items plus or minus 2" [@miller1956], and the duration as
being roughly eighteen seconds [@wikiSTM]. Thus, the goal is that viewers will
have forgotten the first item before a related item is eligible to be once
again included in the shuffle. This property is not currently guaranteed, as it
is possible for the shuffle to run out of items toward the end of the shuffle
and be unable to maintain the constraint.
