<script setup>
const props = defineProps({
  label: { type: String, required: true },
  id: { type: String, required: true },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  required: { type: Boolean, default: false },
  optional: { type: Boolean, default: false },
  error: { type: String, default: null },
  modelValue: { type: String, default: '' }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="form-field">
    <label class="form-label" :for="id">
      {{ label }}
      <span v-if="optional" class="form-optional">(optional)</span>
    </label>
    <input
      class="form-input"
      :class="{ 'form-input--error': error }"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :required="required"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <p v-if="error" class="form-error">{{ error }}</p>
  </div>
</template>

<style scoped>
.form-field {
  margin-bottom: 16px;
}
.form-label {
  display: block;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: rgba(5,56,86,0.7);
  margin-bottom: 4px;
}
.form-optional {
  font-weight: 400;
  color: rgba(5,56,86,0.4);
  margin-left: 4px;
}
.form-input {
  display: block;
  width: 100%;
  height: 44px;
  border: 1px solid var(--gray-2);
  border-radius: var(--radius-md);
  padding: 0 12px;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: var(--blue-deep);
  background: var(--white);
  outline: none;
  transition: border-color 150ms ease;
}
.form-input:focus {
  border-color: var(--blue-bright);
}
.form-input::placeholder {
  color: rgba(5,56,86,0.35);
}
.form-input--error {
  border-color: var(--red-orange);
}
.form-error {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: var(--red-orange);
  margin-top: 4px;
}
</style>
