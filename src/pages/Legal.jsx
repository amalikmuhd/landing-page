import { useState } from 'react';
import Legal from '../components/Legal';

const Legalpage = () => {
  const [tab, setTab] = useState('Terms of Service');

  return (
    <div className="font-space-grotesk font-Open-sans w-full">
      <div className="w-full  flex md:flex-row flex-col  justify-between lg:px-[120px] px-[20px] bg-[#0D0C2B] text-[#fff]">
        <h2 className="font-bold  lg:pt-[216px] pt-[120px] md:pb-[50px] lg:pb-[69px] text-[30px] lg:text-[56px]">
          {tab}
        </h2>
        <span className="text-[#fff] lg:pl-[120px] z-0 lg:pt-[216px] md:pl-[50px] pl-[0px] md:pt-[100px] pt-[30px] lg:pb-[69px] pb-[20px] text-[18px] lg:text-[18px] md:absolute lg:right-[120px] md:right-[30px] text-left md:text-right">
          <p
            className={`hover:text-[#1565D8] ${
              tab === 'Terms of Service' ? `text-[#1565D8]` : `null`
            }`}
            onClick={() => setTab('Terms of Service')}
          >
            Terms of Service
          </p>
          <p
            className={`hover:text-[#1565D8] ${
              tab === 'Privacy Policy' ? `text-[#1565D8]` : `null`
            }`}
            onClick={() => setTab('Privacy Policy')}
          >
            Privacy Policy
          </p>
          <p
            className={`hover:text-[#1565D8] ${
              tab === 'Cookie Policy' ? `text-[#1565D8]` : `null`
            }`}
            onClick={() => setTab('Cookie Policy')}
          >
            Cookie Policy
          </p>
        </span>
      </div>
      <div className="lg:px-[200px] px-[20px] bg-white">
        <div className="pt-[60px]">
          <p className="font-medium">Last updated</p>
          <p className="text-[#595F68]">Feb 21, 2023</p>
        </div>

        {tab === 'Terms of Service' ? (
          <>
            <Legal
              title={'1. Introduction'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer. At pretium neque nisi ante. Diam mauris semper auctor diam egestas sit. Ullamcorper eu lobortis eget pulvinar nisl ullamcorper fusce purus. Erat augue nunc leo, mauris quam laoreet metus, lacus habitant.'
              }
            />
            <Legal
              title={'2. Scope Of Notice'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer. At pretium neque nisi ante. Diam mauris semper auctor diam egestas sit. Ullamcorper eu lobortis eget pulvinar nisl ullamcorper fusce purus.'
              }
            />
            <Legal
              title={'3. What are Cookies And Related Technologies'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer. At pretium neque nisi ante. Diam mauris semper auctor diam egestas sit. Ullamcorper eu lobortis eget pulvinar nisl ullamcorper fusce purus. Erat augue nunc leo, mauris quam laoreet metus, lacus habitant. Dignissim eu turpis aenean rhoncus ultricies sit et massa cum. Morbi adipiscing urna mi varius id in nunc. Nibh sit nibh nibh aliquet id laoreet. Ultricies nec justo ultricies netus adipiscing.'
              }
              subtitle={'Strictly necessary cookies:'}
              subtext={`Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus.`}
              subtitle2={'Functional cookies:'}
              subtext2={
                ' Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus.'
              }
              subtitle3={'Performance cookies:'}
              subtext3={
                ' Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus.'
              }
            />
            <Legal
              title={'4. What We Collect When Using Cookies'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer. At pretium neque nisi ante. Diam mauris semper auctor diam egestas sit. Ullamcorper eu lobortis eget pulvinar nisl ullamcorper fusce purus. Erat augue nunc leo, mauris quam laoreet metus, lacus habitant. Dignissim eu turpis aenean rhoncus ultricies sit et massa cum. Morbi adipiscing urna mi varius id in nunc. Nibh sit nibh nibh aliquet id laoreet. Ultricies nec justo ultricies netus adipiscing.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. '
              }
              subtitle={'Social Media Platforms: '}
              subtext={
                'Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. '
              }
              subtitle2={'Third Party Partners:'}
              subtext2={
                'Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus. Erat augue nunc leo, mauris quam laoreet metus, lacus habitant. Dignissim eu turpis aenean rhoncus ultricies sit et massa cum. Morbi adipiscing urna mi varius id in nunc. Nibh sit nibh nibh aliquet id laoreet. Ultricies nec justo ultricies netus adipiscing.'
              }
              subtext3={
                'Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus. Augue massa tellus vel, malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer'
              }
            />
            <Legal
              title={'5. How We Use Information We Collected'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer. At pretium neque nisi ante. Diam mauris semper auctor diam egestas sit. Ullamcorper eu lobortis eget pulvinar nisl ullamcorper fusce purus. Erat augue nunc leo, mauris quam laoreet metus, lacus habitant. Dignissim eu turpis aenean rhoncus ultricies sit et massa cum. Morbi adipiscing urna mi varius id in nunc. Nibh sit nibh nibh aliquet id laoreet. Ultricies nec justo ultricies netus adipiscing.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. '
              }
              subtext={
                'Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at Privacy Notice.'
              }
              subtext2={
                'Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus. Augue massa tellus vel, malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer.'
              }
            />
          </>
        ) : tab === 'Privacy Policy' ? (
          <>
            <Legal
              title={'1. Introduction'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer. At pretium neque nisi ante. Diam mauris semper auctor diam egestas sit. Ullamcorper eu lobortis eget pulvinar nisl ullamcorper fusce purus. Erat augue nunc leo, mauris quam laoreet metus, lacus habitant.'
              }
            />
            <Legal
              title={'2. Scope Of Notice'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer. At pretium neque nisi ante. Diam mauris semper auctor diam egestas sit. Ullamcorper eu lobortis eget pulvinar nisl ullamcorper fusce purus.'
              }
            />
            <Legal
              title={'3. What are Cookies And Related Technologies'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer. At pretium neque nisi ante. Diam mauris semper auctor diam egestas sit. Ullamcorper eu lobortis eget pulvinar nisl ullamcorper fusce purus. Erat augue nunc leo, mauris quam laoreet metus, lacus habitant. Dignissim eu turpis aenean rhoncus ultricies sit et massa cum. Morbi adipiscing urna mi varius id in nunc. Nibh sit nibh nibh aliquet id laoreet. Ultricies nec justo ultricies netus adipiscing.'
              }
              subtitle={'Strictly necessary cookies:'}
              subtext={`Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus.`}
              subtitle2={'Functional cookies:'}
              subtext2={
                ' Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus.'
              }
              subtitle3={'Performance cookies:'}
              subtext3={
                ' Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus.'
              }
            />
            <Legal
              title={'4. What We Collect When Using Cookies'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer. At pretium neque nisi ante. Diam mauris semper auctor diam egestas sit. Ullamcorper eu lobortis eget pulvinar nisl ullamcorper fusce purus. Erat augue nunc leo, mauris quam laoreet metus, lacus habitant. Dignissim eu turpis aenean rhoncus ultricies sit et massa cum. Morbi adipiscing urna mi varius id in nunc. Nibh sit nibh nibh aliquet id laoreet. Ultricies nec justo ultricies netus adipiscing.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. '
              }
              subtitle={'Social Media Platforms: '}
              subtext={
                'Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. '
              }
              subtitle2={'Third Party Partners:'}
              subtext2={
                'Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus. Erat augue nunc leo, mauris quam laoreet metus, lacus habitant. Dignissim eu turpis aenean rhoncus ultricies sit et massa cum. Morbi adipiscing urna mi varius id in nunc. Nibh sit nibh nibh aliquet id laoreet. Ultricies nec justo ultricies netus adipiscing.'
              }
              subtext3={
                'Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus. Augue massa tellus vel, malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer'
              }
            />
            <Legal
              title={'5. How We Use Information We Collected'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer. At pretium neque nisi ante. Diam mauris semper auctor diam egestas sit. Ullamcorper eu lobortis eget pulvinar nisl ullamcorper fusce purus. Erat augue nunc leo, mauris quam laoreet metus, lacus habitant. Dignissim eu turpis aenean rhoncus ultricies sit et massa cum. Morbi adipiscing urna mi varius id in nunc. Nibh sit nibh nibh aliquet id laoreet. Ultricies nec justo ultricies netus adipiscing.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. '
              }
              subtext={
                'Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at Privacy Notice.'
              }
              subtext2={
                'Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus. Augue massa tellus vel, malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer.'
              }
            />
          </>
        ) : tab === 'Cookie Policy' ? (
          <>
            <Legal
              title={'1. Introduction'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer. At pretium neque nisi ante. Diam mauris semper auctor diam egestas sit. Ullamcorper eu lobortis eget pulvinar nisl ullamcorper fusce purus. Erat augue nunc leo, mauris quam laoreet metus, lacus habitant.'
              }
            />
            <Legal
              title={'2. Scope Of Notice'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer. At pretium neque nisi ante. Diam mauris semper auctor diam egestas sit. Ullamcorper eu lobortis eget pulvinar nisl ullamcorper fusce purus.'
              }
            />
            <Legal
              title={'3. What are Cookies And Related Technologies'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer. At pretium neque nisi ante. Diam mauris semper auctor diam egestas sit. Ullamcorper eu lobortis eget pulvinar nisl ullamcorper fusce purus. Erat augue nunc leo, mauris quam laoreet metus, lacus habitant. Dignissim eu turpis aenean rhoncus ultricies sit et massa cum. Morbi adipiscing urna mi varius id in nunc. Nibh sit nibh nibh aliquet id laoreet. Ultricies nec justo ultricies netus adipiscing.'
              }
              subtitle={'Strictly necessary cookies:'}
              subtext={`Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus.`}
              subtitle2={'Functional cookies:'}
              subtext2={
                ' Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus.'
              }
              subtitle3={'Performance cookies:'}
              subtext3={
                ' Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus.'
              }
            />
            <Legal
              title={'4. What We Collect When Using Cookies'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer. At pretium neque nisi ante. Diam mauris semper auctor diam egestas sit. Ullamcorper eu lobortis eget pulvinar nisl ullamcorper fusce purus. Erat augue nunc leo, mauris quam laoreet metus, lacus habitant. Dignissim eu turpis aenean rhoncus ultricies sit et massa cum. Morbi adipiscing urna mi varius id in nunc. Nibh sit nibh nibh aliquet id laoreet. Ultricies nec justo ultricies netus adipiscing.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. '
              }
              subtitle={'Social Media Platforms: '}
              subtext={
                'Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. '
              }
              subtitle2={'Third Party Partners:'}
              subtext2={
                'Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus. Erat augue nunc leo, mauris quam laoreet metus, lacus habitant. Dignissim eu turpis aenean rhoncus ultricies sit et massa cum. Morbi adipiscing urna mi varius id in nunc. Nibh sit nibh nibh aliquet id laoreet. Ultricies nec justo ultricies netus adipiscing.'
              }
              subtext3={
                'Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus. Augue massa tellus vel, malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer'
              }
            />
            <Legal
              title={'5. How We Use Information We Collected'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer. At pretium neque nisi ante. Diam mauris semper auctor diam egestas sit. Ullamcorper eu lobortis eget pulvinar nisl ullamcorper fusce purus. Erat augue nunc leo, mauris quam laoreet metus, lacus habitant. Dignissim eu turpis aenean rhoncus ultricies sit et massa cum. Morbi adipiscing urna mi varius id in nunc. Nibh sit nibh nibh aliquet id laoreet. Ultricies nec justo ultricies netus adipiscing.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. '
              }
              subtext={
                'Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at Privacy Notice.'
              }
              subtext2={
                'Aliquet suspendisse faucibus ut massa, turpis in nisi viverra elementum. Dolor in suscipit enim in dolor duis ipsum. Eros vestibulum, sem vel sit euismod donec urna nulla sed. Lectus mauris leo dignissim egestas urna eros. Quisque sit at feugiat blandit egestas donec vitae viverra congue. Ornare sit risus. Augue massa tellus vel, malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor eu mauris sodales tellus egestas aenean eget turpis urna. Fermentum, netus vehicula tincidunt morbi felis. Ut metus id amet tincidunt tincidunt quam. Dictum nunc, commodo iaculis egestas nisi. Pretium eget sed metus lectus at ullamcorper suscipit. Augue massa tellus vel, malesuada. Nunc pharetra duis nullam amet diam vel sed in iaculis. Nunc consectetur venenatis, gravida sed quisque eget integer.'
              }
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Legalpage;
