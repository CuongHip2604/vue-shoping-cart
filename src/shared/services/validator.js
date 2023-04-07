import AllRules from "@vee-validate/rules";
import { defineRule } from "vee-validate";

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
