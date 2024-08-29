import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppButton from '@/components/AppButton.vue'

describe('AppButton', () => {
  it('renders the button slot correctly', () => {
    const wrapper = mount(AppButton, {
      slots: {
        default: 'Hello World'
      }
    })

    expect(wrapper.text()).toContain('Hello World')
  })
})
