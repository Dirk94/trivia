import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Checkbox from '@/components/CheckboxGroup/Checkbox.vue'

describe('Checkbox', () => {
  it('renders the checked checkbox mark correctly', () => {
    const wrapper = mount(Checkbox, {
      props: {
        checked: true
      }
    })

    const el = wrapper.find('[data-test-id="checked"]').exists()
    expect(el).toBeTruthy()
  })

  it('renders the unchecked checkbox mark correctly', () => {
    const wrapper = mount(Checkbox, {
      props: {
        checked: false
      }
    })

    const el = wrapper.find('[data-test-id="checked"]').exists()
    expect(el).toBeFalsy()
  })
})
