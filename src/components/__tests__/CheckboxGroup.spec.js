import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CheckboxGroup from '@/components/CheckboxGroup/CheckboxGroup.vue'

describe('CheckboxGroup', () => {
  it('renders the options correctly', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: [
          { value: 'easy', label: 'Easy' },
          { value: 'medium', label: 'Medium' }
        ]
      }
    })

    expect(wrapper.text()).toContain('Easy')
    expect(wrapper.text()).toContain('Medium')
  })

  it('selects the correct value', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        modelValue: 'easy',
        options: [
          { value: 'easy', label: 'Easy' },
          { value: 'medium', label: 'Medium' }
        ]
      }
    })

    expect(wrapper.get('[data-test-selected="selected"]').text()).toContain('Easy')
  })

  it('triggers an update:modelValue event', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: [
          { value: 'easy', label: 'Easy' },
          { value: 'medium', label: 'Medium' }
        ]
      }
    })

    wrapper.get('[data-test-value="medium"]').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })
})
