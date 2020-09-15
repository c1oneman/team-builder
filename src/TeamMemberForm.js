import React from 'react'

export default function TeamMemberForm(props) {
  const { values, update, submit } = props

  const onChange = evt => {
    const { name, value } = evt.target
    update(name, value)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Username
          <input
            type='text'
            name='name'
            onChange={onChange}
            value={values.name}
            placeholder='Jonny Appleseed'
            maxLength='30'
          />
        </label>
        <label>Badge #
          <input
            type='number'
            name='badge'
            onChange={onChange}
            value={values.badge}
            placeholder='123'
            maxLength='4'
          />
        </label>
        <label>Email
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
          <input
            type='email'
            name='email'
            onChange={onChange}
            value={values.email}
            placeholder='John@hotmail.com'
            maxLength='30'
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Title
          {/* 🔥 STEP 5 - Make dropdown for role. */}
          <select name='title' value={values.title} onChange={onChange}>
            <option value="">Select Title</option>
            <option value="designer">Designer</option>
            <option value="intern">Intern</option>
            <option value="pm">Project Manager</option>
          </select>
        </label>

        <div className='submit'>
          <button disabled={!values.email || !values.name || !values.title || !values.badge}>submit</button>
        </div>
      </div>
    </form>
  )
}
