import GameFilter from '../src/GameFilter';

describe('#handleChange', () => {
    it('should handle the change and ', () => {
      var subject = new GameFilter();
      spyOn(subject, 'setState');
      subject.props = jasmine.createSpyObj('props', ['onFilterChange']);

      subject.handleChange({target: { value: 'Bat'}}).and.callFake((obj) => {
        expect(obj.target.value).toEqual('Bat');
      });

      expect(subject.props.onFilterChange).toHaveBeenCalledWith('Bat');
    });
});
